import axios from 'axios';

const URL = 'https://api.spacexdata.com/v4/';

export const getSpaceCraftThunk = async ({ category, id }, thunkAPI) => {
  // console.log(thunkAPI.signal);
  try {
    const { data } = await axios.get(`${URL}${category}/${id}`, {
      headers: { Accept: 'application/json' },
    });

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};
