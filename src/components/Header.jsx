'use client';
import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/images/icons/logo.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clearStorage } from '@/utils/helper/storage.helper';
import { useDispatch, useSelector } from 'react-redux';
import { setLogoutBtnShow } from '@/redux/user/action.user';

const Header = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const { logoutBtnShow } = useSelector((state) => state.user);

  if (pathname.includes('login') || pathname.includes('register')) return null;
  return (
    <div className="header-container py-3">
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
        <div className="text-end ">
          <div className="d-flex  justify-content-center align-items-center gap-4">
            <Link href="/">Home</Link>
            <Link href="/users">Users</Link>

            {logoutBtnShow ? (
              <button
                className="btn btn-primary"
                onClick={() => {
                  dispatch(setLogoutBtnShow(false));
                  clearStorage();
                }}
              >
                Logout
              </button>
            ) : (
              <Link href="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
