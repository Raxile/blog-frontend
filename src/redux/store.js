import { configureStore } from '@reduxjs/toolkit';
import { blogReducer } from './blog/reducer.blog';
import { userReducer } from './user/reducer.user';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    user: userReducer,
  },
});
