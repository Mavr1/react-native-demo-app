import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  commentsData: [],
  error: '',
};

export default createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setErrorNull: (state) => ({ ...state, error: '' }),
    addCommentSuccess: (state, { payload }) => ({
      ...state,
      commentsData: [...state.commentsData, payload],
    }),
    addCommentError: (state, { payload }) => ({ ...state, error: payload }),
    getCommentsSuccess: (state, { payload }) => ({
      ...state,
      commentsData: [...payload],
    }),
    getCommentsError: (state, { payload }) => ({ ...state, error: payload }),
  },
});
