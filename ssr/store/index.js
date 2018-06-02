import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension'
// import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reduxPromise from 'redux-promise';
import { reducers } from './reducers';

const persistConfig = {
  key: 'state',
  storage,
};

// const persistedReducer = persistReducer(persistConfig, reducers);

// const store = createStore(
//   reducers,
//   {},
//   applyMiddleware(logger, reduxPromise),
// );
// const persistor = persistStore(store);
console.log(reduxPromise)
const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(reduxPromise)))

export { store, persistor };

