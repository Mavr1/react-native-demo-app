import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  postsData: [],
  error: '',
};

export default createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setErrorNull: (state) => ({ ...state, error: '' }),
    addPostSuccess: (state, { payload }) => ({
      ...state,
      postsData: [...state.postsData, payload],
    }),
    addPostError: (state, { payload }) => ({ ...state, error: payload }),
    getPostsSuccess: (state, { payload }) => ({
      ...state,
      postsData: payload,
    }),
    getPostsError: (state, { payload }) => ({ ...state, error: payload }),
    addCommentSuccess: (state) => ({ ...state }),
    addCommentError: (state, { payload }) => ({ ...state, error: payload }),
    getCommentsSuccess: (state) => ({ ...state }),
    getCommentsError: (state, { payload }) => ({ ...state, error: payload }),
  },
});
