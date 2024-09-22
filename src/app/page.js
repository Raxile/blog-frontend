'use client';
import Card from '@/components/Card';
import { getBlogAction } from '@/redux/blog/action.blog';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const { logoutBtnShow } = useSelector((state) => state.user);
  const router = useRouter();
  const { blogs } = useSelector((state) => state.blog);

  const clickHandler = () => {
    if (logoutBtnShow) {
      router.push('/add-blog');
    } else {
      router.push('/login');
    }
  };
  useEffect(() => {
    dispatch(getBlogAction());
  }, []);
  return (
    <div className="container mx-auto mt-3">
      <h2 className="text-center">Blogs</h2>
      <div className="text-end">
        <button
          className="btn btn-danger"
          onClick={clickHandler}
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Add Blog
        </button>
      </div>
      <div className="mt-5 d-flex gap-3 align-items-center justify-content-center flex-wrap ">
        {blogs.map((blog) => (
          <Card key={blog.id} title={blog.title} body={blog.body} />
        ))}
      </div>
    </div>
  );
};

export default Home;
