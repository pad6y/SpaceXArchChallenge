import axios from 'axios';

const URL = 'https://api.spacexdata.com/v4/crew';

export const getAllCrewThunk = async (_, thunkAPI) => {
  try {
    const response = await axios(URL);

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};
