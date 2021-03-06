import { Chart } from 'react-google-charts';
import React, { useContext, useEffect, useState } from 'react';
import { WeatherDataContext } from '../contexts/WeatherDataContext';
import './PrecipChart.scss';

export const PrecipChart = () => {
  const [chartData, setChartData] = useState(null);
  const data = useContext(WeatherDataContext);

  useEffect(() => {
    if (!data) {
      return;
    }

    const dataArray = [['Minute', 'Precipitation']];
    data.weather.minutely.data.forEach((minute, index) => {
      dataArray.push([index, minute.precipIntensity]);
    });
    setChartData(dataArray);
  }, [data]);

  return chartData ? (
    <Chart
      width="100%"
      height="140px"
      chartType="AreaChart"
      loader={<div className="text-center text-transparent">Loading...</div>}
      data={chartData}
      options={{
        backgroundColor: 'transparent',
        series: [{ color: '#76a9fa', areaOpacity: 0.75 }],
        hAxis: {
          baselineColor: 'transparent',
          gridlines: { color: 'transparent', count: 5 },
          textPosition: 'out',
          textStyle: { color: '#999' },
          ticks: [
            { v: 0, f: '' },
            { v: 10, f: '10 min' },
            { v: 20, f: '20 min' },
            { v: 30, f: '30 min' },
            { v: 40, f: '40 min' },
            { v: 50, f: '50 min' },
            { v: 60, f: '' },
          ],
        },
        vAxis: {
          baselineColor: 'transparent',
          gridlines: { color: '#999' },
          textPosition: 'in',
          textStyle: { color: '#ccc' },
          ticks: [
            { v: 0, f: '' },
            { v: 0.1, f: 'LIGHT' },
            { v: 0.2, f: 'MED' },
            { v: 0.3, f: 'HEAVY' },
          ],
          viewWindow: { min: 0, max: 0.34 },
          viewWindowMode: 'maximized',
        },
        tooltip: {
          trigger: 'none',
        },
        enableInteractivity: false,
        lineWidth: 0.25,
        pointsVisible: false,
        chartArea: { width: '100%', height: '140px', top: 0 },
        titlePosition: 'in',
        axisTitlesPosition: 'in',
        legend: 'none',
      }}
    />
  ) : (
    ''
  );
};

export default PrecipChart;
