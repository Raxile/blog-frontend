import { createAction } from '@reduxjs/toolkit';
import {
  getTransactionHistoryHttp,
  getTransferPlaysHttp,
} from './http.playsTransfer';
import toast from 'react-hot-toast';

export const LOADING_KEYS = {
  TRANSACTION_HISTORY_LOADER: 'transactionHistoryLoader',
  TRANSFER_PLAYS_LOADER: 'transferPlaysLoader',
};

export const setLoading = createAction('playsTransfer/setLoading');
export const setPlaysTransactionHistory = createAction(
  'playsTransfer/setPlaysTransactionHistory',
);

export const getTransferPlaysAction = (data, cb) => {
  return async (dispatch) => {
    dispatch(
      setLoading({ key: LOADING_KEYS.TRANSFER_PLAYS_LOADER, value: true }),
    );
    const res = await getTransferPlaysHttp(data);
    cb?.(res);
    if (res.success) toast.success(res?.message);
    else toast.error(res?.message);

    dispatch(
      setLoading({ key: LOADING_KEYS.TRANSFER_PLAYS_LOADER, value: false }),
    );
  };
};

export const getTransactionHistoryAction = (playerId, params) => {
  return async (dispatch) => {
    dispatch(
      setLoading({ key: LOADING_KEYS.TRANSACTION_HISTORY_LOADER, value: true }),
    );
    const res = await getTransactionHistoryHttp(playerId, params);
    if (res.success)
      dispatch(
        setPlaysTransactionHistory({ data: res.data, metadata: res.metadata }),
      );
    else toast.error(res?.message);
    dispatch(
      setLoading({
        key: LOADING_KEYS.TRANSACTION_HISTORY_LOADER,
        value: false,
      }),
    );
  };
};
