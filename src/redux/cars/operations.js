import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../axiosInstance.js';

export const getAllCars = createAsyncThunk(
  'cars/getAllCars',
  async (_, thunkAPI) => {
    try {
      const brand = '';
      const rentalPrice = '';
      const { data } = await axiosInstance.get(
        `/cars?brand=${brand || ''}&rentalPrice=${rentalPrice || ''}`
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
