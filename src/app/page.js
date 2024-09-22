'use client';
import Card from '@/components/Card';
import { getBlogAction } from '@/redux/blog/action.blog';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog);
  useEffect(() => {
    dispatch(getBlogAction());
  }, []);
  return (
    <div className="container mx-auto mt-3">
      <h2 className="text-center">Blogs</h2>

      <div className="mt-5 d-flex gap-3 align-items-center justify-content-center flex-wrap ">
        {blogs.map((blog) => (
          <Card key={blog.id} title={blog.title} body={blog.body} />
        ))}
      </div>
    </div>
  );
};

export default Home;
