import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getSpaceCraftThunk } from './spaceCraftThunk';

const initialState = {
  spaceCraft: {},
  isLoading: false,
};

export const getSpaceCraft = createAsyncThunk(
  'SpaceCraft/getSpaceCraft',
  getSpaceCraftThunk
);

export const spaceCraftSlice = createSlice({
  name: 'spaceCraft',
  initialState,
  reducers: {},
  extraReducers: {
    [getSpaceCraft.pending]: (state) => {
      state.isLoading = true;
    },
    [getSpaceCraft.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.spaceCraft = payload;
    },
    [getSpaceCraft.rejected]: (state, { payload }) => {
      state.isLoading = false;
      if (payload) console.log(payload);
    },
  },
});

// export const {} = spaceCraftSlice.actions;

export default spaceCraftSlice.reducer;
