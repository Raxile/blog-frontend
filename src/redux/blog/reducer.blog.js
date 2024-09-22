import { createReducer } from '@reduxjs/toolkit';
import { LOADING_KEYS, setBlog, setBlogs, setLoading } from './action.blog';

const initialState = {
  [LOADING_KEYS.BLOG_LOADER]: false,
  blog: {},
  blogs: [],
};

export const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLoading, (state, { payload }) => {
      const { key, value } = payload;
      state[key] = value;
    })
    .addCase(setBlog, (state, { payload }) => {
      state.blog = payload;
    })
    .addCase(setBlogs, (state, { payload }) => {
      state.blogs = payload;
    });
});
