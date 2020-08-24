import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  uid: '',
  avatar: '',
  error: '',
};

export default createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerSuccess: (state, { payload }) => ({
      ...state,
      name: payload.displayName,
      email: payload.email,
      uid: payload.uid,
      avatar: payload.photoURL,
    }),
    registerError: (state, { payload }) => ({ ...state, error: payload }),
    setErrorNull: (state) => ({ ...state, error: '' }),
    loginSuccess: (state, { payload }) => ({
      ...state,
      name: payload.displayName,
      email: payload.email,
      uid: payload.uid,
      avatar: payload.photoURL,
    }),
    loginError: (state, { payload }) => ({ ...state, error: payload }),
    logoutSuccess: () => initialState,
    logoutError: (state, { payload }) => ({ ...state, error: payload }),
    getAuthStateSuccess: (state, { payload }) => ({
      ...state,
      name: payload.displayName,
      email: payload.email,
      uid: payload.uid,
      avatar: payload.photoURL,
    }),
    getAuthStateError: (state, { payload }) => ({ ...state, error: payload }),
    updateSuccess: (state, { payload }) => ({
      ...state,
      name: payload.displayName,
      avatar: payload.photoURL,
    }),
    updateError: (state, { payload }) => ({ ...state, error: payload }),
  },
});
