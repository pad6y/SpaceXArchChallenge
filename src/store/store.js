import { configureStore } from '@reduxjs/toolkit';
import vehicleReducer from '../features/vehicle/vehicleSlice';

export const store = configureStore({
  reducer: {
    vehicle: vehicleReducer,
  },
});
