import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCrewThunk } from './crewThunk';

const initialState = {
  crew: [],
  isLoading: false,
  totalCrewNum: 0,
};

export const getAllCrew = createAsyncThunk('crew/getAllCrew', getAllCrewThunk);

export const crewSlice = createSlice({
  name: 'crew',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllCrew.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllCrew.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.crew = action.payload;
      state.totalCrewNum = state.crew.length;
    },
    [getAllCrew.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    },
  },
});

export default crewSlice.reducer;
