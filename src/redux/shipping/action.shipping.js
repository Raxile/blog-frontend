import toast from 'react-hot-toast';
import {
  addShippingInfoHttp,
  deleteShippingInfoHttp,
  getShippingInfoHttp,
} from './http.shipping';

const { createAction } = require('@reduxjs/toolkit');

export const LOADING_KEYS = {
  DELETE_SHIPPING_INFO_LOADER: 'deleteShippingLoader',
  SHIPPING_INFO_LOADER: 'getShippingLoader',
  ADD_SHIPPING_INFO_LOADER: 'addShippingLoader',
};

export const setLoading = createAction('shippingInfo/setLoading');
export const setShippingIno = createAction('shippingInfo/setShippingInfo');
export const setIsClaimed = createAction('shippingInfo/setIsClaimed');

export const addShippingInfoAction = (data, cb) => {
  return async (dispatch) => {
    dispatch(
      setLoading({ key: LOADING_KEYS.ADD_SHIPPING_INFO_LOADER, value: true }),
    );
    const res = await addShippingInfoHttp(data);
    cb?.(res);
    if (res?.success) {
      toast.success(res?.message);
      dispatch(setIsClaimed(true));
    } else toast.error(res?.message);
    dispatch(
      setLoading({ key: LOADING_KEYS.ADD_SHIPPING_INFO_LOADER, value: false }),
    );
  };
};

export const getShippingInfoAction = (params, cb) => {
  return async (dispatch) => {
    dispatch(
      setLoading({ key: LOADING_KEYS.SHIPPING_INFO_LOADER, value: true }),
    );

    const res = await getShippingInfoHttp(params);
    cb?.(res);
    if (res?.success) {
      if (res?.data?.id) {
        dispatch(setIsClaimed(true));
      } else dispatch(setIsClaimed(false));
      dispatch(setShippingIno(res?.data));
    } else toast.error(res?.message);
    dispatch(
      setLoading({ key: LOADING_KEYS.SHIPPING_INFO_LOADER, value: false }),
    );
  };
};

export const deleteShippingInfoAction = (params, cb) => {
  return async (dispatch) => {
    dispatch(
      setLoading({
        key: LOADING_KEYS.DELETE_SHIPPING_INFO_LOADER,
        value: true,
      }),
    );
    const res = await deleteShippingInfoHttp(params);
    cb?.(res);
    if (res?.success) toast.success(res?.message);
    else toast.error(res?.message);
    dispatch(
      setLoading({
        key: LOADING_KEYS.DELETE_SHIPPING_INFO_LOADER,
        value: false,
      }),
    );
  };
};
