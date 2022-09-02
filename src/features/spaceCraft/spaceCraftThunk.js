import axios from 'axios';

const URL = 'https://api.spacexdata.com/v4/';

export const getSpaceCraftThunk = async ({ category, id }, thunkAPI) => {
  try {
    const { data } = await axios.get(`${URL}${category}/${id}`);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};
