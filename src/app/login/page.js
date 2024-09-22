import React from 'react';
import Logo from '@/assets/images/icons/logo.svg';
import Image from 'next/image';

const Login = () => {
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
          <h5 className="card-title text-center mt-2">Login</h5>
          <p className="card-text">body</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
