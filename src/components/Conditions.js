import React, { Fragment, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatCondition, getWeatherIcon } from '../modules/helpers';
import { Modal } from '../components/Modal';
import './Conditions.scss';

export const Conditions = ({ data, date = null }) => {
  const [conditionsHeading, setConditionsHeading] = useState('Current Conditions');

  useEffect(() => {
    if (date) {
      setConditionsHeading(`${dayjs(date).format('DDD, MMMM, D')} at ${dayjs(date).format('h:mm A')}`)
    }

    // return () => {};
  }, []);

  return (
    <Modal id="conditions-modal" heading={conditionsHeading} content={
      <Fragment>
        <h4 className="mb-2 text-lg">
          {/* <FontAwesomeIcon icon={['fad', getWeatherIcon(data.currently.icon)]} fixedWidth size="2x" />
          <br /> */}
          {data.currently.summary}
        </h4>
        <div className="flex flex-wrap mt-2">
          <div className="conditions-item">
            <FontAwesomeIcon icon={['fad', 'thermometer-half']} size="2x" fixedWidth style={{'--fa-primary-color': 'red', '--fa-secondary-color': '#fff', '--fa-secondary-opacity': '.75'}} />
            <br />
            <small>
              Temp: {formatCondition(data.currently.temperature, 'temperature')}
              <br />
              Feels Like: {formatCondition(data.currently.apparentTemperature, 'apparentTemperature')}
            </small>
          </div>
          <div className="conditions-item">
            <FontAwesomeIcon icon={['fad', 'wind-turbine']} size="2x" fixedWidth style={{'--fa-primary-color': 'dodgerblue', '--fa-secondary-color': '#f5f5f5', '--fa-secondary-opacity': '.75'}} />
            <br />
            <small>
              Wind: <FontAwesomeIcon icon={['fad', 'chevron-circle-up']} size="lg" transform={{ rotate: 42 }} fixedWidth /> {formatCondition(data.currently.windSpeed, 'windSpeed')}
              <br />
              Gusts: {formatCondition(data.currently.windGust, 'windGust')}
            </small>
          </div>
          <div className="conditions-item">
            <FontAwesomeIcon icon={['fad', 'clouds']} size="2x" fixedWidth style={{'--fa-primary-color': 'lightgray', '--fa-secondary-color': 'darkgray', '--fa-secondary-opacity': '.75'}} />
            <br />
            <small>
              Cloud Cover: {formatCondition(data.currently.cloudCover, 'cloudCover')}
            </small>
          </div>
          <div className="conditions-item">
            <FontAwesomeIcon icon={['fad', 'eye']} size="2x" fixedWidth style={{'--fa-primary-color': 'skyblue', '--fa-secondary-color': 'white', '--fa-secondary-opacity': '.75'}} />
            <br />
            <small>
              Visibiity: {formatCondition(data.currently.visibility, 'visibility')}
            </small>
          </div>
          <div className="conditions-item">
            <FontAwesomeIcon icon={['fad', 'humidity']} size="2x" swapOpacity fixedWidth style={{'--fa-primary-color': 'black', '--fa-secondary-color': 'deepskyblue', '--fa-secondary-opacity': '.75'}} />
            <br />
            <small>
              Humidity: {formatCondition(data.currently.humidity, 'humidity')}
              {/* <br />
              Dew Point: {formatCondition(data.currently.dewPoint, 'dewPoint')} */}
            </small>
          </div>
          <div className="conditions-item">
            <FontAwesomeIcon icon={['fad', 'tachometer-alt']} size="2x" fixedWidth style={{'--fa-primary-color': 'crimson', '--fa-secondary-color': 'snow', '--fa-secondary-opacity': '.75'}} />
            <br />
            <small>
              Pressure: {formatCondition(data.currently.pressure, 'pressure')}
            </small>
          </div>
          <div className="conditions-item">
            <FontAwesomeIcon icon={['fad', 'umbrella']} size="2x" swapOpacity fixedWidth style={{'--fa-primary-color': 'royalblue', '--fa-secondary-color': 'sienna', '--fa-secondary-opacity': '.75'}} />
            <br />
            <small>
              Precip: {formatCondition(data.currently.precipProbability, 'precipProbability')}
            </small>
          </div>
          <div className="conditions-item">
            <FontAwesomeIcon icon={['fad', 'sun']} size="2x" fixedWidth style={{'--fa-primary-color': 'gold', '--fa-secondary-color': 'darkorange', '--fa-secondary-opacity': '.75'}} />
            <br />
            <small>
              UV Index: {formatCondition(data.currently.uvIndex, 'uvIndex')}
            </small>
          </div>
          <div className="conditions-item">
            <FontAwesomeIcon icon={['fad', 'sunrise']} size="2x" swapOpacity fixedWidth style={{'--fa-primary-color': 'darkorange', '--fa-secondary-color': 'gold', '--fa-secondary-opacity': '.75'}} />
            <br />
            <small>
              Sunrise: {formatCondition(data.daily.data[0].sunriseTime, 'sunriseTime')}
            </small>
          </div>
          <div className="conditions-item">
            <FontAwesomeIcon icon={['fad', 'sunset']} size="2x" swapOpacity fixedWidth style={{'--fa-primary-color': 'darkorange', '--fa-secondary-color': 'gold', '--fa-secondary-opacity': '.75'}} />
            <br />
            <small>
              Sunset: {formatCondition(data.daily.data[0].sunsetTime, 'sunsetTime')}
            </small>
          </div>
        </div>
      </Fragment>
    } />
  );
};

export default Conditions;
