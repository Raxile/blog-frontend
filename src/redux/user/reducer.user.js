import { createReducer } from '@reduxjs/toolkit';
import {
  LOADING_KEYS,
  setAuctionInfo,
  setAvatarList,
  setLoading,
  setUserInfo,
} from './action.user';

const initialState = {
  [LOADING_KEYS.LOGIN_LOADER]: false,
  [LOADING_KEYS.AVATAR_LIST_LOADER]: false,
  auctionInfo: null,
  userInfo: null,
  avatarList: [],
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLoading, (state, { payload }) => {
      const { key, value } = payload;
      state[key] = value;
    })
    .addCase(setAuctionInfo, (state, { payload }) => {
      state.auctionInfo = payload;
    })
    .addCase(setUserInfo, (state, { payload }) => {
      state.userInfo = payload;
    })
    .addCase(setAvatarList, (state, { payload }) => {
      state.avatarList = payload;
    });
});
