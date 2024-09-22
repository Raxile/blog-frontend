const ACCESS_TOKEN = 'access_token';

export const getToken = () => {
  return JSON.parse(localStorage.getItem(ACCESS_TOKEN));
};

export const setToken = (token) => {
  localStorage.getItem(JSON.stringify(token));
};

export const clearStorage = () => {
  localStorage.clear();
};
