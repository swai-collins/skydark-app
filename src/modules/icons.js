import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChrome,
  faDev,
  faEdge,
  faFirefoxBrowser,
  faGithub,
  faHackerNews,
  faProductHunt,
  faRedditAlien,
} from '@fortawesome/free-brands-svg-icons';
import { faCircleExclamation } from '@fortawesome/pro-regular-svg-icons';
import { faLocation } from '@fortawesome/pro-light-svg-icons';
import {
  faCircleInfo as faCircleInfoSolid,
  faGear as faGearSolid,
  faGlobeStand as faGlobeStandSolid,
  faLocationArrow as faLocationArrowSolid,
  faMap as faMapSolid,
} from '@fortawesome/pro-solid-svg-icons';
import {
  faAngleUp,
  faBan,
  faBolt,
  faCalendar,
  faCircle,
  faCircleArrowDown,
  faCircleArrowUp,
  faCircleChevronUp,
  faCircleInfo,
  faClock,
  faCloud,
  faCloudBolt,
  faCloudFog,
  faCloudHail,
  faCloudRain,
  faClouds,
  faCloudSleet,
  faCloudsMoon,
  faCloudSnow,
  faCloudsSun,
  faCode,
  faDroplet,
  faDropletPercent,
  faEye,
  faForward,
  faGauge,
  faGear,
  faGlobe,
  faGlobeStand,
  faHouseDay,
  faHurricane,
  faImage,
  faLocationArrow,
  faMap,
  faMoonStars,
  faPause,
  faPlay,
  faRadar,
  faRaindrops,
  faSignal,
  faSpinner,
  faStop,
  faSun,
  faSunrise,
  faSunset,
  faTemperatureHalf,
  faTemperatureHigh,
  faTemperatureLow,
  faTornado,
  faTriangleExclamation,
  faUmbrella,
  faUser,
  faWifiSlash,
  faWind,
  faWindTurbine,
} from '@fortawesome/pro-duotone-svg-icons';
import { isDarkModeEnabled } from './theme';

export const initIcons = () => {
  library.add(
    faAngleUp,
    faBan,
    faBolt,
    faCalendar,
    faChrome,
    faCircle,
    faCircleArrowDown,
    faCircleArrowUp,
    faCircleChevronUp,
    faCircleExclamation,
    faCircleInfo,
    faCircleInfoSolid,
    faClock,
    faCloud,
    faCloudBolt,
    faCloudFog,
    faCloudHail,
    faCloudRain,
    faClouds,
    faCloudSleet,
    faCloudsMoon,
    faCloudSnow,
    faCloudsSun,
    faCode,
    faDev,
    faDroplet,
    faDropletPercent,
    faEdge,
    faEye,
    faFirefoxBrowser,
    faForward,
    faGauge,
    faGear,
    faGearSolid,
    faGithub,
    faGlobe,
    faGlobeStand,
    faGlobeStandSolid,
    faHackerNews,
    faHouseDay,
    faHurricane,
    faImage,
    faImage,
    faLocation,
    faLocationArrow,
    faLocationArrowSolid,
    faMap,
    faMapSolid,
    faMoonStars,
    faPause,
    faPlay,
    faProductHunt,
    faRadar,
    faRaindrops,
    faRedditAlien,
    faSignal,
    faSpinner,
    faStop,
    faSun,
    faSunrise,
    faSunset,
    faTemperatureHalf,
    faTemperatureHigh,
    faTemperatureLow,
    faTornado,
    faTriangleExclamation,
    faUmbrella,
    faUser,
    faUser,
    faWifiSlash,
    faWind,
    faWindTurbine,
  );
};

export const getWeatherIcon = (icon) => {
  const iconMap = {
    'clear-day': {
      icon: 'sun',
      iconStyles: {
        '--fa-primary-color': 'gold',
        '--fa-secondary-color': 'darkorange',
        '--fa-secondary-opacity': '.75',
      },
    },
    'clear-night': {
      icon: 'moon-stars',
      iconStyles: {
        '--fa-primary-color': 'plum',
        '--fa-secondary-color': 'palegoldenrod',
        '--fa-secondary-opacity': '1',
      },
    },
    rain: {
      icon: 'cloud-rain',
      iconStyles: {
        '--fa-primary-color': 'silver',
        '--fa-secondary-color': 'dodgerblue',
        '--fa-secondary-opacity': '.75',
      },
    },
    snow: {
      icon: 'cloud-snow',
      iconStyles: {
        '--fa-primary-color': 'silver',
        '--fa-secondary-color': isDarkModeEnabled() ? 'white' : 'gainsboro',
        '--fa-secondary-opacity': '1',
      },
    },
    sleet: {
      icon: 'cloud-sleet',
      iconStyles: {
        '--fa-primary-color': 'silver',
        '--fa-secondary-color': isDarkModeEnabled() ? 'white' : 'gainsboro',
        '--fa-secondary-opacity': '.9',
      },
    },
    wind: {
      icon: 'wind',
      iconStyles: {
        '--fa-primary-color': 'skyblue',
        '--fa-secondary-color': 'lightgray',
        '--fa-secondary-opacity': '.75',
      },
    },
    fog: {
      icon: 'cloud-fog',
      iconStyles: {
        '--fa-primary-color': 'lightgray',
        '--fa-secondary-color': 'silver',
        '--fa-secondary-opacity': '1',
      },
    },
    cloudy: {
      icon: 'clouds',
      iconStyles: {
        '--fa-primary-color': 'silver',
        '--fa-secondary-color': 'darkgray',
        '--fa-secondary-opacity': '.75',
      },
    },
    'partly-cloudy-day': {
      icon: 'clouds-sun',
      iconStyles: { '--fa-primary-color': 'silver', '--fa-secondary-color': 'gold', '--fa-secondary-opacity': '.75' },
    },
    'partly-cloudy-night': {
      icon: 'clouds-moon',
      iconStyles: { '--fa-primary-color': 'silver', '--fa-secondary-color': 'plum', '--fa-secondary-opacity': '1' },
    },
    hail: {
      icon: 'cloud-hail',
      iconStyles: {
        '--fa-primary-color': 'silver',
        '--fa-secondary-color': isDarkModeEnabled() ? 'white' : 'gainsboro',
        '--fa-secondary-opacity': '.9',
      },
    },
    hurricane: {
      icon: 'hurricane',
      iconStyles: { '--fa-primary-color': 'black', '--fa-secondary-color': 'crimson', '--fa-secondary-opacity': '.9' },
    },
    thunderstorm: {
      icon: 'cloud-bolt',
      iconStyles: { '--fa-primary-color': 'silver', '--fa-secondary-color': 'yellow', '--fa-secondary-opacity': '.8' },
    },
    tornado: {
      icon: 'tornado',
      iconStyles: {
        '--fa-primary-color': 'skyblue',
        '--fa-secondary-color': 'silver',
        '--fa-secondary-opacity': '.75',
      },
    },
  };
  return iconMap[icon];
};
