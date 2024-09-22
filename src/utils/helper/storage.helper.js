/* eslint-disable no-constant-condition */
const ACCESS_TOKEN = 'access_token';

export const getToken = () => {
  if (typeof window !== 'undefined')
    return JSON.parse(localStorage.getItem(ACCESS_TOKEN));
};

export const setToken = (token) => {
  if (typeof window !== 'undefined')
    localStorage.setItem(ACCESS_TOKEN, JSON.stringify(token));
};

export const clearStorage = () => {
  if (typeof window !== 'undefined') localStorage.clear();
};
