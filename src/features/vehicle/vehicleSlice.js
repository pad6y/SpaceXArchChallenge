import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getVehiclesThunk } from './vehicleThunk';

const initialState = {
  vehicles: [],
  isLoading: false,
  message: '',
};

export const getVehicles = createAsyncThunk(
  'Vehicles/getAll',
  getVehiclesThunk
);

export const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {
    sortList: (state) => {
      state.vehicles = state.vehicles.reverse();
    },
    reset: (state) => initialState,
  },
  extraReducers: {
    [getVehicles.pending]: (state) => {
      state.isLoading = true;
    },
    [getVehicles.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.vehicles = action.payload;
    },
    [getVehicles.rejected]: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
  },
});

export const { sortList, reset } = vehicleSlice.actions;
export default vehicleSlice.reducer;
