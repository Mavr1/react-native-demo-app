import { configureStore } from '@reduxjs/toolkit';
import loaderSlice from './loader/loaderSlice';
import authSlice from './auth/authSlice';

export const store = configureStore({
  reducer: {
    [loaderSlice.name]: loaderSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
});
