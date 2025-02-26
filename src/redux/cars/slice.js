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
        state.carsPage.totalCars = action.payload.totalCars;
        state.carsPage.page = Number(action.payload.page);
        state.carsPage.totalPages = action.payload.totalPages;
        state.carsPage.cars =
          state.carsPage.page === 1
            ? action.payload.cars
            : [...state.carsPage.cars, ...action.payload.cars];
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
