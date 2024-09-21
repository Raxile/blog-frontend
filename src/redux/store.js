import { configureStore } from '@reduxjs/toolkit';
import { shippingReducer } from './shipping/reducer.shipping';
import { playsTransferReducer } from './playsTransfer/reducer.playsTransfer';

export const store = configureStore({
  reducer: {
    shipping: shippingReducer,
    playsTransfer: playsTransferReducer,
  },
});
