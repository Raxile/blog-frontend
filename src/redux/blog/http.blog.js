import axiosInstance from '@/config/axiosInstance';
import {
  ADD_BLOG_API_ENDPOINT,
  GET_BLOG_API_ENDPOINT,
} from '@/utils/constants/api-endpoint.constant';

export const getBlogsHttp = async () => {
  try {
    const response = await axiosInstance.get(GET_BLOG_API_ENDPOINT);
    return response;
  } catch (error) {
    return error;
  }
};

export const getBlogByIdHttp = async (blogId) => {
  try {
    const response = await axiosInstance.get(
      `${GET_BLOG_API_ENDPOINT}/${blogId}`,
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const addBlogsHttp = async (payload) => {
  try {
    const response = await axiosInstance.post(ADD_BLOG_API_ENDPOINT, payload);
    return response;
  } catch (error) {
    return error;
  }
};

export const updateBlogHttp = async (blogId, payload) => {
  try {
    const response = await axiosInstance.put(
      `${GET_BLOG_API_ENDPOINT}/${blogId}`,
      payload,
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteBlogByIdHttp = async (blogId) => {
  try {
    const response = await axiosInstance.delete(
      `${GET_BLOG_API_ENDPOINT}/${blogId}`,
    );
    return response;
  } catch (error) {
    return error;
  }
};
