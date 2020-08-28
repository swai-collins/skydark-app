import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { Map, Marker, TileLayer, WMSTileLayer, LayersControl, ScaleControl, ZoomControl } from "react-leaflet";
import { getRadarTs } from '../modules/helpers';
import { getData } from '../modules/local-storage';
import './WeatherMapFull.scss';

// {/* <TileLayer
// url="https://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913/{z}/{x}/{y}.png"
// layers="nexrad-n0q-900913"
// transparent="true"
// /> */}

export const WeatherMapFull = (props) => {
  const [mapView, setMapView] = useState('radar');
  const coordinates = getData('coordinates') || null;

  useEffect(() => {
    if (!coordinates) {
      window.location.replace('/');
    }

    return () => {};
  }, [mapView]);

  const changeHandler = (event) => {
    console.log(event.target.value);
    setMapView(event.target.value);
  };

  return (
    <div className="contents">
      <div className="header">
        <div className="section-name">
          <select className="" onChange={changeHandler}>
            <option value="radar">Radar</option>
            <option value="precipitation_new">Precipitation</option>
            <option value="clouds_new">Clouds</option>
            <option value="temp_new">Temperature</option>
            <option value="wind_new">Wind Speed</option>
            <option value="pressure_new">Sea Level Pressure</option>
          </select>
        </div>
      </div>
      <div className="h-full min-h-screen contents v-full">
        <div className="min-h-screen map-container">
          <Map
            animate={true}
            boxZoom={true}
            center={[coordinates.lat, coordinates.lng]}
            doubleClickZoom={true}
            dragging={true}
            keyboard={false}
            scrollWheelZoom={false}
            tap={true}
            touchZoom={true}
            zoom={7}
            zoomControl={false}
          >
            <Marker position={[coordinates.lat, coordinates.lng]} opacity={.9} />
            <ZoomControl position="topleft" />
            <ScaleControl position="topleft" />
            <LayersControl position="topright">
              <LayersControl.BaseLayer name="Dark (default)" checked>
                <TileLayer
                  url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png" //https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png, https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
                  opacity={1}
                  zIndex={1}
                />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer name="Standard">
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  opacity={.8}
                  zIndex={1}
                />
              </LayersControl.BaseLayer>
              <LayersControl.BaseLayer name="B/W">
                <TileLayer
                  url="http://{s}.tile.stamen.com/toner/{z}/{x}/{y}@2x.png"
                  opacity={.9}
                  zIndex={1}
                />
              </LayersControl.BaseLayer>
              <LayersControl.Overlay name="Conditions" checked>
                {mapView === 'radar' ? (
                  <TileLayer
                    url={`https://tilecache.rainviewer.com/v2/radar/${getRadarTs()}/256/{z}/{x}/{y}/8/1_1.png`}
                    opacity={.8}
                  />
                ) : (
                  <WMSTileLayer
                    url={`https://tile.openweathermap.org/map/${mapView}/{z}/{x}/{y}.png?appid=${props.OPENWEATHERMAP_API_KEY}`}
                  />
                )}
              </LayersControl.Overlay>
            </LayersControl>
          </Map>
        </div>
      </div>
    </div>
  );
};

export default WeatherMapFull;
