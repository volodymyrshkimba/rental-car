import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../axiosInstance.js';

export const getAllCars = createAsyncThunk(
  'cars/getAllCars',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get('/cars');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
