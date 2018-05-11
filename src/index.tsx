import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import store from './core/store';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

/* istanbul ignore file */
ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
