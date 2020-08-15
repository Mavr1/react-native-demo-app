import fb from '../../firebase/config';
import postsSlice from './postsSlice';
import loaderSlice from '../loader/loaderSlice';

export const addPost = (post) => async (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  try {
    const addPostRespond = await fb.firestore().collection('posts').add(post);
    dispatch(postsSlice.actions.addPostSuccess(post));
    dispatch(postsSlice.actions.setErrorNull());
  } catch (error) {
    dispatch(postsSlice.actions.addPostError(error.message));
  }
  dispatch(loaderSlice.actions.setLoadingFalse());
};
