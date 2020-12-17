import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact from '@bugsnag/plugin-react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './components/App';
import { ErrorView } from './components/ErrorView';
import {
  initDarkMode,
  initServiceWorker,
  isDev,
} from './modules/helpers';

initDarkMode();

Bugsnag.start({
  apiKey: 'c439d6280bb7eada679ad4c6ef66ab5b',
  plugins: [new BugsnagPluginReact()],
});

const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React);

ReactDOM.render(
  <ErrorBoundary FallbackComponent={ErrorView} onError={isDev() ? console.error : null}>
    <React.StrictMode>
      <App OPENWEATHERMAP_API_KEY={process.env.OPENWEATHERMAP_API_KEY} />
    </React.StrictMode>
  </ErrorBoundary>, document.getElementById('root'),
);

if (!isDev()) {
  initServiceWorker();
}
