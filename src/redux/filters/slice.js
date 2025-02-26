import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: {
      brand: '',
      rentalPrice: '',
      minMileage: '',
      maxMileage: '',
    },
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
