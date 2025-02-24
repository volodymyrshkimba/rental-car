import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
});
