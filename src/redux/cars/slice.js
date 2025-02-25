import { createSlice } from '@reduxjs/toolkit';
import { getAllCars } from './operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    carsPage: {
      cars: null,
      totalCars: null,
      page: null,
      totalPages: null,
    },
    loading: null,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCars.pending, state => {
        state.loading = true;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.loading = false;
        state.carsPage = action.payload;
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default carsSlice.reducer;
