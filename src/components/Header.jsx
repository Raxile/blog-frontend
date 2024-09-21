import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/images/icons/logo.svg';

const Header = () => {
  return (
    <div className="header-container">
      <div className="container mx-auto d-flex justify-content-between align-items-center w-100">
        <div className="header-logo-container p-1">
          <Image
            src={Logo}
            width={500}
            height={500}
            className="w-100 h-100"
            alt="logo"
          />
        </div>
        <div className="text-end">
          <div className="d-flex text-white gap-4">
            <span>Home</span>
            <span>About</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
