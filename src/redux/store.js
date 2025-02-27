import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import carsReducer from './cars/slice.js';
import filtersReducer from './filters/slice.js';

const persistFiltersConfig = {
  key: 'favourites',
  version: 1,
  storage,
  whitelist: ['favourites'],
};

const persistedFiltersReducer = persistReducer(
  persistFiltersConfig,
  filtersReducer
);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: persistedFiltersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
