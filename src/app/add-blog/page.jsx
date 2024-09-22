'use client';

import * as Yup from 'yup';
import React, { useEffect } from 'react';
import Logo from '@/assets/images/icons/logo.svg';
import Image from 'next/image';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { addBlogAction } from '@/redux/blog/action.blog';

const blogSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, 'Title must be at least 5 characters long')
    .max(100, 'Title must be less than 100 characters')
    .required('Title is required'),

  body: Yup.string()
    .min(20, 'Body must be at least 20 characters long')
    .required('Body is required'),
});

const initialValue = {
  title: '',
  body: '',
};

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { logoutBtnShow } = useSelector((state) => state.user);

  useEffect(() => {
    if (!logoutBtnShow) router.push('/login');
  }, []);

  const submitHandler = (values, { resetForm }) => {
    dispatch(
      addBlogAction(values, (res) => {
        if (res?.success) {
          resetForm();
          router.push('/');
        }
      }),
    );
  };

  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-100 auth-container">
      <div className="card">
        <div className="card-body">
          <div className="auth-logo-container mx-auto">
            <Image
              src={Logo}
              width={500}
              height={500}
              className="w-100 h-100"
              alt="logo"
            />
          </div>
          <h5 className="card-title text-center mt-2">Add Blog</h5>
          <div>
            <Formik
              validationSchema={blogSchema}
              initialValues={initialValue}
              onSubmit={submitHandler}
            >
              {({ errors, touched }) => (
                <Form className="mt-2 d-flex flex-column align-items-center justify-content-center gap-4">
                  <div className="input-group">
                    <Field
                      className="w-100 form-control"
                      placeholder="Enter Title"
                      name="title"
                    />
                    {touched.title && errors.title ? (
                      <span className="position-absolute text-danger input-error">
                        {errors.title}
                      </span>
                    ) : null}
                  </div>
                  <div className="input-group">
                    <Field
                      className="w-100 form-control"
                      placeholder="Enter Body"
                      name="body"
                      as="textarea"
                    />
                    {touched.body && errors.body ? (
                      <span className="position-absolute text-danger input-error">
                        {errors.body}
                      </span>
                    ) : null}
                  </div>
                  <button type="submit" className="btn btn-primary w-50">
                    Add Blog
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
