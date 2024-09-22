import { createAction } from '@reduxjs/toolkit';
import { getUsersHttp, usersLoginHttp, usersRegisterHttp } from './http.user';
import toast from 'react-hot-toast';
import { setToken } from '@/utils/helper/storage.helper';

export const LOADING_KEYS = {
  LOGIN_LOADER: 'loginLoader',
  USERS_LIST: 'userList',
};

export const setLoading = createAction('user/setLoading');
export const setUsers = createAction('user/setUsers');
export const setLogoutBtnShow = createAction('user/setLogoutBtnShow');

export const getUsersAction = () => {
  return async (dispatch) => {
    dispatch(setLoading({ key: LOADING_KEYS.USERS_LIST, value: true }));
    const res = await getUsersHttp();
    if (res?.success) dispatch(setUsers(res.data));
    else toast.error(res?.message);
    dispatch(setLoading({ key: LOADING_KEYS.USERS_LIST, value: false }));
  };
};

export const userLoginAction = (data, cb) => {
  return async (dispatch) => {
    dispatch(setLoading({ key: LOADING_KEYS.LOGIN_LOADER, value: true }));
    const res = await usersLoginHttp(data);
    cb?.(res);
    if (res?.success) {
      setToken(res?.data?.token);
      dispatch(setLogoutBtnShow(true));
      toast.success(res?.message);
    } else toast.error(res?.message);
    dispatch(setLoading({ key: LOADING_KEYS.LOGIN_LOADER, value: false }));
  };
};

export const userRegisterAction = (data, cb) => {
  return async (dispatch) => {
    dispatch(setLoading({ key: LOADING_KEYS.LOGIN_LOADER, value: true }));
    const res = await usersRegisterHttp(data);
    cb?.(res);
    if (res?.success) {
      toast.success(res?.message);
    } else toast.error(res?.message);
    dispatch(setLoading({ key: LOADING_KEYS.LOGIN_LOADER, value: false }));
  };
};
