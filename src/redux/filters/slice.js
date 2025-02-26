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
    favourites: [],
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    addFavourite: (state, action) => {
      state.favourites.push(action.payload);
    },
    deleteFavourite: (state, action) => {
      const index = state.favourites.findIndex(
        item => item.id === action.payload.id
      );

      state.favourites.splice(index, 1);
    },
  },
});

export const { changeFilter, addFavourite, deleteFavourite } =
  filtersSlice.actions;

export default filtersSlice.reducer;
