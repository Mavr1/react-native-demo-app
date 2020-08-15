import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  uid: '',
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
    }),
    registerError: (state, { payload }) => ({ ...state, error: payload }),
    setErrorNull: (state) => ({ ...state, error: '' }),
    loginSuccess: (state, { payload }) => ({
      ...state,
      name: payload.userData.name,
    }),
    loginError: (state, { payload }) => ({ ...state, error: payload }),
    logoutSuccess: () => initialState,
    logoutError: (state, { payload }) => ({ ...state, error: payload }),
  },
});
