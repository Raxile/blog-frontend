import axiosInstance from '@/config/axiosInstance';
import {
  TRANSACTION_HISTORY_API_ENDPOINT,
  TRANSFER_PLAYS_API_ENDPOINT,
} from '@/utils/constants/api-endpint.constant';

// Params ->  limit page
export const getTransactionHistoryHttp = async (playerId, params) => {
  try {
    const response = await axiosInstance.get(
      `${TRANSACTION_HISTORY_API_ENDPOINT}/${playerId}`,
      { params },
    );
    return response;
  } catch (error) {
    return error;
  }
};

//Transfer Plays HTTP Request
export const getTransferPlaysHttp = async (data) => {
  try {
    const response = await axiosInstance.post(
      TRANSFER_PLAYS_API_ENDPOINT,
      data,
    );
    return response;
  } catch (error) {
    return error;
  }
};
