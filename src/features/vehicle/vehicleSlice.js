import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  vehicles: [],
  isLoading: false,
  message: '',
};

const URL = 'https://api.spacexdata.com/v4/';

export const getVehicles = createAsyncThunk(
  'getVehicles/getAll',
  async (category, thunkAPI) => {
    try {
      const response = await axios(`${URL}${category}`);

      const formatted = response.data.map((item) => {
        const {
          id,
          name,
          type,
          flickr_images: images,
          description,
          wikipedia,
        } = item;
        const formattedEntry = {
          id,
          name,
          type,
          images,
          description,
          wikipedia,
        };
        return formattedEntry;
      });

      return formatted;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVehicles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVehicles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.vehicles = action.payload;
      })
      .addCase(getVehicles.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export const { reset } = vehicleSlice.actions;
export default vehicleSlice.reducer;
