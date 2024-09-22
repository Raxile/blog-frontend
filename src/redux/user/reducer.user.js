import { createReducer } from '@reduxjs/toolkit';
import {
  LOADING_KEYS,
  setLoading,
  setLogoutBtnShow,
  setUsers,
} from './action.user';
import { getToken } from '@/utils/helper/storage.helper';

const initialState = {
  [LOADING_KEYS.LOGIN_LOADER]: false,
  [LOADING_KEYS.USERS_LIST]: false,
  users: [],
  logoutBtnShow: !!getToken(),
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLoading, (state, { payload }) => {
      const { key, value } = payload;
      state[key] = value;
    })
    .addCase(setUsers, (state, { payload }) => {
      state.users = payload;
    })
    .addCase(setLogoutBtnShow, (state, { payload }) => {
      state.logoutBtnShow = payload;
    });
});
