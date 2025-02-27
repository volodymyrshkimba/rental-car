import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  filters: {
    brand: '',
    rentalPrice: '',
    minMileage: '',
    maxMileage: '',
  },
  favourites: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filters = action.payload;
    },
    addFavourite: (state, action) => {
      state.favourites.push(action.payload);
    },
    deleteFavourite: (state, action) => {
      state.favourites = state.favourites.filter(
        item => item !== action.payload
      );
    },
  },
});

export const { changeFilter, addFavourite, deleteFavourite } =
  filtersSlice.actions;

export default filtersSlice.reducer;
