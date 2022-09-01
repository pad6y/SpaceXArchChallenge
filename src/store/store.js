import { configureStore } from '@reduxjs/toolkit';
import vehicleReducer from '../features/vehicle/vehicleSlice';
import crewReducer from '../features/crew/crewSlice';
import spaceCraftReducer from '../features/spaceCraft/spaceCraftSlice';

export const store = configureStore({
  reducer: {
    vehicle: vehicleReducer,
    crew: crewReducer,
    spaceCraft: spaceCraftReducer,
  },
});
