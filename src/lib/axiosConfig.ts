import axios from 'axios';

import { BASE_URL, API_KEY } from '@env';

export const axiosConfig = axios.create({
  baseURL: `${BASE_URL}/${API_KEY}`,
});
