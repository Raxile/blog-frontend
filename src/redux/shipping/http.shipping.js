import axiosInstance from '@/config/axiosInstance';
import { SHIPPING_INFO_API_ENDPOINT } from '@/utils/constants/api-endpint.constant';

export const addShippingInfoHttp = async (data) => {
  try {
    const response = await axiosInstance.post(SHIPPING_INFO_API_ENDPOINT, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const getShippingInfoHttp = async (params) => {
  try {
    const response = await axiosInstance.get(SHIPPING_INFO_API_ENDPOINT, {
      params,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteShippingInfoHttp = async (params) => {
  try {
    const response = await axiosInstance.delete(SHIPPING_INFO_API_ENDPOINT, {
      params,
    });
    return response;
  } catch (error) {
    return error;
  }
};
