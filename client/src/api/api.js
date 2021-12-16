import axios from 'axios';

export const getData = async () => {
  try {
    const axiosResponse = await axios.get(
      'http://localhost:8080/getBaseByBid?bid=61b84f506ef5c86fbdedcef6'
    );
    const { data } = axiosResponse;
    console.log(data);
    return data;
  } catch (error) {}
};
