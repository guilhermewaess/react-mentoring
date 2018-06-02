import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as reduxPromise from 'redux-promise';
import { reducers } from './reducers';

const persistConfig = {
  key: 'state',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(
  persistedReducer,
  {},
  applyMiddleware(logger, reduxPromise)
)
const persistor = persistStore(store)

export {
  store, persistor
}
