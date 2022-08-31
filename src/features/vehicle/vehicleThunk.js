import axios from 'axios';
const URL = 'https://api.spacexdata.com/v4/';

export const getVehiclesThunk = async (category, thunkAPI) => {
  try {
    const response = await axios(`${URL}${category}`, {
      signal: thunkAPI.signal,
    });

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
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
};
