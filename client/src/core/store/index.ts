import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { Promise } from 'redux-promise';
import { reducers } from './reducers';

// workaround for lack of type file
const reduxPromise = require('redux-promise').default; //tslint:disable-line


declare module 'redux' {
  export type GenericStoreEnhancer = any;
}

const persistConfig = {
  key: 'state',
  storage,
};
console.log(reduxPromise); //tslint:disable-line
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  {},
  composeWithDevTools(applyMiddleware(reduxPromise, logger)),
);
const persistor = persistStore(store);

export { store, persistor };
