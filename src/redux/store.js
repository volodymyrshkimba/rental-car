import { configureStore } from '@reduxjs/toolkit';

import carsReducer from './cars/slice.js';

export const store = configureStore({
  reducer: {
    car: carsReducer,
  },
});

export default store;
