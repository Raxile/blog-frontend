'use client';

import * as Yup from 'yup';
import React from 'react';
import Logo from '@/assets/images/icons/logo.svg';
import Image from 'next/image';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { userLoginAction } from '@/redux/user/action.user';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('email must be a valid email')
    .required('email is required')
    .trim('Email may not contain any spaces at the beginning or end'),
  password: Yup.string()
    .min(6, 'password is invalid')
    .max(16, 'password is invalid')
    .required('password is required'),
});

const initialValue = {
  email: '',
  password: '',
};

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const submitHandler = (values, { resetForm }) => {
    dispatch(
      userLoginAction(values, (res) => {
        if (res?.success) {
          resetForm();
          router.push('/users');
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
          <h5 className="card-title text-center mt-2">Login User</h5>
          <div>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={initialValue}
              onSubmit={submitHandler}
            >
              {({ errors, touched }) => (
                <Form className="mt-2 d-flex flex-column align-items-center justify-content-center gap-4">
                  <div className="input-group">
                    <Field
                      className="w-100 form-control"
                      placeholder="Enter Email"
                      name="email"
                    />
                    {touched.email && errors.email ? (
                      <span className="position-absolute text-danger input-error">
                        {errors.email}
                      </span>
                    ) : null}
                  </div>
                  <div className="input-group">
                    <Field
                      className="w-100 form-control"
                      placeholder="Enter Password"
                      name="password"
                    />
                    {touched.password && errors.password ? (
                      <span className="position-absolute text-danger input-error">
                        {errors.password}
                      </span>
                    ) : null}
                  </div>
                  <div className="d-flex flex-column w-100 align-items-center justify-content-center gap-1">
                    <button type="submit" className="btn btn-primary w-50">
                      Login
                    </button>
                    <Link href="/register">Register</Link>
                  </div>
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
