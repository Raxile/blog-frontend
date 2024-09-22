const ACCESS_TOKEN = 'access_token';

export const getToken = () => {
  return JSON.parse(localStorage.getItem(ACCESS_TOKEN));
};

export const setToken = (token) => {
  localStorage.setItem(ACCESS_TOKEN, JSON.stringify(token));
};

export const clearStorage = () => {
  localStorage.clear();
};
