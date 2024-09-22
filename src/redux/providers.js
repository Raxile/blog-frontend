'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { Toaster } from 'react-hot-toast';

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            zIndex: '100000',
          },
        }}
      />
    </Provider>
  );
};

export default Providers;
