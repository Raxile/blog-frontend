import { createAction } from '@reduxjs/toolkit';
import {
  addBlogsHttp,
  deleteBlogByIdHttp,
  getBlogByIdHttp,
  getBlogsHttp,
  updateBlogHttp,
} from './http.blog';
import toast from 'react-hot-toast';

export const LOADING_KEYS = {
  BLOG_LOADER: 'blogLoader',
  DELETE_LOADER: 'blogDeleteLoader',
  UPDATE_LOADER: 'blogUpdateLoader',
};

export const setLoading = createAction('blog/setLoading');
export const setBlogs = createAction('blog/setBlogs');
export const setBlog = createAction('blog/setBlog');

export const getBlogAction = () => {
  return async (dispatch) => {
    dispatch(setLoading({ key: LOADING_KEYS.BLOG_LOADER, value: true }));
    const res = await getBlogsHttp();
    if (res?.success) dispatch(setBlogs(res?.data));
    else toast.error(res?.message);

    dispatch(setLoading({ key: LOADING_KEYS.BLOG_LOADER, value: true }));
  };
};

export const getBlogByIdAction = (id) => {
  return async (dispatch) => {
    dispatch(setLoading({ key: LOADING_KEYS.BLOG_LOADER, value: true }));
    const res = await getBlogByIdHttp(id);
    if (res?.success) dispatch(setBlog(res?.data));
    else toast.error(res?.message);

    dispatch(setLoading({ key: LOADING_KEYS.BLOG_LOADER, value: true }));
  };
};

export const addBlogAction = (data, cb) => {
  return async (dispatch) => {
    dispatch(setLoading({ key: LOADING_KEYS.UPDATE_LOADER, value: true }));
    const res = await addBlogsHttp(data);
    cb?.(res);
    if (res?.success) {
      dispatch(getBlogAction());
      toast.success(res?.message);
    } else toast.error(res?.message);

    dispatch(setLoading({ key: LOADING_KEYS.UPDATE_LOADER, value: true }));
  };
};

export const updateBlogAction = (id, data, cb) => {
  return async (dispatch) => {
    dispatch(setLoading({ key: LOADING_KEYS.UPDATE_LOADER, value: true }));
    const res = await updateBlogHttp(id, data);
    cb?.(res);
    if (res?.success) {
      toast.success(res?.message);
    } else toast.error(res?.message);

    dispatch(setLoading({ key: LOADING_KEYS.UPDATE_LOADER, value: true }));
  };
};

export const deleteBlogAction = (id, cb) => {
  return async (dispatch) => {
    dispatch(setLoading({ key: LOADING_KEYS.DELETE_LOADER, value: true }));
    const res = await deleteBlogByIdHttp(id);
    cb?.(res);
    if (res?.success) {
      toast.success(res?.message);
    } else toast.error(res?.message);
    dispatch(setLoading({ key: LOADING_KEYS.DELETE_LOADER, value: true }));
  };
};
