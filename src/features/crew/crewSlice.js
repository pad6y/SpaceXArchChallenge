import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCrewThunk } from './crewThunk';
import paginate from '../../utils/paginate';

const initialState = {
  crew: [],
  isLoading: false,
  totalPages: 0,
  page: 0,
};

export const getAllCrew = createAsyncThunk('crew/getAllCrew', getAllCrewThunk);

export const crewSlice = createSlice({
  name: 'crew',
  initialState,
  reducers: {
    prevPage: (state) => {
      state.page = state.page - 1;
    },
    nextPage: (state) => {
      state.page = state.page + 1;
    },
    handlePage: (state, { payload }) => {
      state.page = payload;
    },
    cleanUp: (state) => {
      state = initialState;
    },
  },
  extraReducers: {
    [getAllCrew.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllCrew.fulfilled]: (state, { payload }) => {
      const newArr = paginate(payload);
      state.crew = newArr;
      state.totalPages = state.crew.length;
      state.isLoading = false;
    },
    [getAllCrew.rejected]: (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
    },
  },
});

export const { prevPage, nextPage, handlePage, cleanUp } = crewSlice.actions;
export default crewSlice.reducer;
