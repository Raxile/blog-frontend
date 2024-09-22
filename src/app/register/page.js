'use client';

import * as Yup from 'yup';
import React from 'react';
import Logo from '@/assets/images/icons/logo.svg';
import Image from 'next/image';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { userRegisterAction } from '@/redux/user/action.user';
import { useRouter } from 'next/navigation';

const registerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'name is invalid')
    .max(30, 'name is invalid')
    .required('name is required'),
  email: Yup.string()
    .email('email must be a valid email')
    .required('email is required')
    .trim('Email may not contain any spaces at the beginning or end'),
  password: Yup.string()
    .min(6, 'password is invalid')
    .max(16, 'password is invalid')
    .required('password is required'),
  age: Yup.number()
    .integer('age must be an integer')
    .min(0, 'age must be at least 0')
    .max(120, 'age cannot be greater than 120')
    .required('age is required'),
});

const initialValue = {
  name: '',
  age: '',
  email: '',
  password: '',
};

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const submitHandler = (values, { resetForm }) => {
    dispatch(
      userRegisterAction(values, (res) => {
        if (res?.success) {
          resetForm();
          router.push('/login');
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
          <h5 className="card-title text-center mt-2">Register User</h5>
          <div>
            <Formik
              initialValues={initialValue}
              validationSchema={registerValidationSchema}
              onSubmit={submitHandler}
            >
              {({ errors, touched }) => (
                <Form className="mt-2 d-flex flex-column align-items-center justify-content-center gap-4">
                  <div className="input-group">
                    <Field
                      className="w-100 form-control"
                      placeholder="Enter Name"
                      name="name"
                    />

                    {touched.name && errors.name ? (
                      <span className="position-absolute text-danger input-error">
                        {errors.name}
                      </span>
                    ) : null}
                  </div>
                  <div className="input-group">
                    <Field
                      className="w-100 form-control"
                      placeholder="Enter age"
                      name="age"
                      type="number"
                    />

                    {touched.age && errors.age ? (
                      <span className="position-absolute text-danger input-error">
                        {errors.age}
                      </span>
                    ) : null}
                  </div>
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
                      Register
                    </button>
                    <Link href="/login">Login</Link>
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

export default Register;
