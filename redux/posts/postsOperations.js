import fb from '../../firebase/config';
import postsSlice from './postsSlice';
import loaderSlice from '../loader/loaderSlice';

export const addPost = (post) => async (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  try {
    const addPostResponse = await fb.firestore().collection('posts').add(post);
    dispatch(
      postsSlice.actions.addPostSuccess({ ...post, id: addPostResponse.id })
    );
    dispatch(postsSlice.actions.setErrorNull());
  } catch (error) {
    dispatch(postsSlice.actions.addPostError(error.message));
  }
  dispatch(loaderSlice.actions.setLoadingFalse());
};

export const getPosts = (postOwnerId) => async (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  try {
    const snapshot = postOwnerId
      ? await fb
          .firestore()
          .collection('posts')
          .where('uid', '==', postOwnerId)
          .get()
      : await fb.firestore().collection('posts').get();
    let data = [];
    snapshot.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
    dispatch(postsSlice.actions.getPostsSuccess(data));
  } catch (error) {
    dispatch(postsSlice.actions.getPostsError(error.message));
  }
  dispatch(loaderSlice.actions.setLoadingFalse());
};
