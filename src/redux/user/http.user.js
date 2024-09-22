import axiosInstance from '@/config/axiosInstance';
import {
  GET_USERS_API_ENDPOINT,
  USER_LOGIN_API_ENDPOINT,
  USER_REGISTER_API_ENDPOINT,
} from '@/utils/constants/api-endpoint.constant';

export const getUsersHttp = async () => {
  try {
    const response = await axiosInstance.get(GET_USERS_API_ENDPOINT);
    return response;
  } catch (error) {
    return error;
  }
};

export const usersLoginHttp = async (payload) => {
  try {
    const response = await axiosInstance.post(USER_LOGIN_API_ENDPOINT, payload);
    return response;
  } catch (error) {
    return error;
  }
};

export const usersRegisterHttp = async (payload) => {
  try {
    const response = await axiosInstance.post(
      USER_REGISTER_API_ENDPOINT,
      payload,
    );
    return response;
  } catch (error) {
    return error;
  }
};
