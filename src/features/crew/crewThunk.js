import axios from 'axios';
const URL = 'https://api.spacexdata.com/v4/crew';

export const getAllCrewThunk = async (_, thunkAPI) => {
  try {
    // const controller = new AbortController();
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};
