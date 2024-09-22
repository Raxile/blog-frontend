import { getToken } from '@/utils/helper/storage.helper';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENV_BASE_PATH,
  timeout: 5000,
});

// TODO: add condition for bearer token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) config.headers.Authorization = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    const { data, status } = response;

    return { ...data, status };
  },
  (error) => {
    if (error?.response) return Promise.reject(error.response.data);
    return Promise.reject('Something went wrong');
  },
);
export default axiosInstance;
