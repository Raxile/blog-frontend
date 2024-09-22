import { createReducer } from '@reduxjs/toolkit';
import { LOADING_KEYS, setLoading, setUsers } from './action.user';

const initialState = {
  [LOADING_KEYS.LOGIN_LOADER]: false,
  [LOADING_KEYS.USERS_LIST]: false,
  users: [],
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLoading, (state, { payload }) => {
      const { key, value } = payload;
      state[key] = value;
    })
    .addCase(setUsers, (state, { payload }) => {
      state.users = payload;
    });
});
