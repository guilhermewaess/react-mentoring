import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import * as reduxPromise from 'redux-promise';
import { reducers } from './reducers';


export default createStore(
  reducers,
  {},
  applyMiddleware(logger, reduxPromise)
)
