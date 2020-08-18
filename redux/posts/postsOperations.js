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
    postOwnerId
      ? await fb
          .firestore()
          .collection('posts')
          .where('uid', '==', postOwnerId)
          .onSnapshot((data) => getPostHelper(data, dispatch))
      : await fb
          .firestore()
          .collection('posts')
          .onSnapshot((data) => getPostHelper(data, dispatch));
    dispatch(postsSlice.actions.getPostsSuccess(data));
  } catch (error) {
    dispatch(postsSlice.actions.getPostsError(error.message));
  }
  dispatch(loaderSlice.actions.setLoadingFalse());
};

const getPostHelper = (data, dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  try {
    const posts = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    dispatch(postsSlice.actions.getPostsSuccess(posts));
    dispatch(postsSlice.actions.setErrorNull());
  } catch (error) {
    dispatch(postsSlice.actions.getPostsError(error.message));
  }
  dispatch(loaderSlice.actions.setLoadingFalse());
};
