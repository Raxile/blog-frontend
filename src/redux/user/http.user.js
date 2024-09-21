import axiosInstance from '@/config/axiosInstance';
import {
  GET_AUCTION_HOUSE_INFO,
  GET_AVATAR_LIST_API_ENDPOINT,
  USER_LOGIN_API_ENDPOINT,
  USER_LOGOUT_API_ENDPOINT,
} from '@/utils/constants/api-endpint.constant';

export const getAuctionHouseInfoHttp = async (params) => {
  try {
    const response = await axiosInstance.get(GET_AUCTION_HOUSE_INFO, {
      params,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const userLoginHttp = async (data) => {
  try {
    const response = await axiosInstance.post(USER_LOGIN_API_ENDPOINT, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const getAvatarListHttp = async () => {
  try {
    const response = await axiosInstance.get(GET_AVATAR_LIST_API_ENDPOINT);
    return response;
  } catch (error) {
    return error;
  }
};

export const userLogoutHttp = async () => {
  try {
    const response = await axiosInstance.put(USER_LOGOUT_API_ENDPOINT);
    return response;
  } catch (error) {
    return error;
  }
};

export const userVerifyHttp = async (data) => {
  try {
    const response = await axiosInstance.patch('user/verify', data);
    return response;
  } catch (error) {
    return error;
  }
};

export const userRegisterHttp = async (data) => {
  try {
    const response = await axiosInstance.post('user/register/v2', data);
    return response;
  } catch (error) {
    return error;
  }
};

export const getCountryListHttp = async (queryName) => {
  try {
    const response = await axiosInstance.get(
      `location/countries/list${queryName ? '?name=' + queryName : ''}`,
    );
    return response;
  } catch (error) {
    return error;
  }
};
export const getCountryListByCodeHttp = async (queryCode) => {
  const response = await axiosInstance.get(
    `location/countries/list?code=${queryCode} `,
  );
  return response;
};

export const getCurrentLocationHttp = async () => {
  try {
    const response = await axiosInstance.get('location/current/address');
    return response;
  } catch (error) {
    return error;
  }
};

export const updateUserData = async (userId, data) => {
  try {
    const response = await axiosInstance.put(`user/${userId}`, data);
    return response;
  } catch (error) {
    return error;
  }
};
