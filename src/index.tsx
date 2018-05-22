import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

/* istanbul ignore file */
ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
