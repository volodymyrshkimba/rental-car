import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../axiosInstance.js';

export const getAllCars = createAsyncThunk(
  'cars/getAllCars',
  async (page, thunkAPI) => {
    const { filters } = thunkAPI.getState();
    try {
      const { data } = await axiosInstance.get(
        `/cars?page=${page}&brand=${filters.filters.brand}&rentalPrice=${filters.filters.rentalPrice}&minMileage=${filters.filters.minMileage}&maxMileage=${filters.filters.maxMileage}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getAllBrands = createAsyncThunk(
  'cars/getAllBrands',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get('/brands');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
