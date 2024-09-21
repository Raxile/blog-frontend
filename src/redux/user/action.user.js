import storage from '@/helpers/storage';
import { createAction } from '@reduxjs/toolkit';
import {
  getAuctionHouseInfoHttp,
  getAvatarListHttp,
  userLoginHttp,
  userLogoutHttp,
} from './http.user';
import toast from 'react-hot-toast';

export const LOADING_KEYS = {
  LOGIN_LOADER: 'loginLoader',
  AVATAR_LIST_LOADER: 'avatarListLoader',
};

export const setLoading = createAction('user/setLoading');
export const setAuctionInfo = createAction('user/setAuctionInfo');
export const setUserInfo = createAction('user/setUserInfo');
export const setAvatarList = createAction('user/setAvatarList');

// params -> subdomain:hostname
export const getAuctionHouseInfoAction = (params) => {
  return async (dispatch) => {
    const res = await getAuctionHouseInfoHttp(params);
    if (res?.success) dispatch(setAuctionInfo(res?.data));
    else toast.error(res?.message);
  };
};

export const userLoginAction = (data, cb) => {
  return async (dispatch) => {
    dispatch(setLoading({ key: LOADING_KEYS.LOGIN_LOADER, value: true }));
    const res = await userLoginHttp(data);
    if (res?.success) {
      cb?.(res);
      dispatch(setUserInfo(res?.data));
      toast.success(res?.message);
    } else toast.error(res?.message);

    dispatch(setLoading({ key: LOADING_KEYS.LOGIN_LOADER, value: false }));
  };
};

export const userLogoutAction = (cb) => {
  return async (dispatch) => {
    dispatch(setLoading({ key: LOADING_KEYS.LOGIN_LOADER, value: true }));

    const res = await userLogoutHttp();
    if (res?.success) {
      toast.success(res?.message);
      dispatch(setUserInfo(null));
      storage.clear();
    } else toast.error(res?.message);
    dispatch(setLoading({ key: LOADING_KEYS.LOGIN_LOADER, value: false }));
  };
};

export const getAvatarListAction = () => {
  return async (dispatch) => {
    dispatch(setLoading({ key: LOADING_KEYS.LOGIN_LOADER, value: true }));
    const res = await getAvatarListHttp();
    if (res?.success) dispatch(setAvatarList(res?.data));
    else toast.error(res?.message);
    dispatch(setLoading({ key: LOADING_KEYS.LOGIN_LOADER, value: false }));
  };
};
