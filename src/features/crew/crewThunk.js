import axios from 'axios';
const URL = 'https://api.spacexdata.com/v4/crew';

export const getAllCrewThunk = async (_, thunkAPI) => {
  // console.log(thunkAPI.signal);
  try {
    const { data } = await axios.get(URL, {
      headers: { Accept: 'application/json' },
      // signal: thunkAPI.signal,
    });

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};

// export const getAllCrewThunk = async (_, thunkAPI) => {
//   console.log(thunkAPI.signal);
//   try {
//     const controller = new AbortController();
//     const response = await axios.get(URL, { signal: controller.signal });
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// };
