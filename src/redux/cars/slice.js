import { createSlice } from '@reduxjs/toolkit';
import { getAllBrands, getAllCars } from './operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    carsPage: {
      cars: null,
      totalCars: null,
      page: null,
      totalPages: null,
    },
    brands: null,
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
      })
      .addCase(getAllBrands.pending, state => {
        state.loading = true;
      })
      .addCase(getAllBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(getAllBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default carsSlice.reducer;
