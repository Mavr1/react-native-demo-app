import { configureStore } from '@reduxjs/toolkit';
import loaderSlice from './loader/loaderSlice';
import authSlice from './auth/authSlice';
import postsSlice from './posts/postsSlice';
import commentsSlice from './comments/commentsSlice';

export const store = configureStore({
  reducer: {
    [loaderSlice.name]: loaderSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [postsSlice.name]: postsSlice.reducer,
    [commentsSlice.name]: commentsSlice.reducer,
  },
});
