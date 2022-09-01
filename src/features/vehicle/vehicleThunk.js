import axios from 'axios';
const URL = 'https://api.spacexdata.com/v4/';

export const getVehiclesThunk = async (category, thunkAPI) => {
  // console.log(thunkAPI.signal);
  try {
    const response = await axios(`${URL}${category}`, {
      signal: thunkAPI.signal,
    });

    const formatted = response.data.map((item) => {
      const formattedEntry = {
        id: item.id,
        name: item.name,
        type: item.type,
        images: item.flickr_images,
        description: item.description,
        wikipedia: item.wikipedia,
      };

      return formattedEntry;
    });

    return formatted;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
};
