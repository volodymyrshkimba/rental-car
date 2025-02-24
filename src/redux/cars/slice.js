import { createSlice } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    carsList: null,
  },
});

export default carsSlice.reducer;
