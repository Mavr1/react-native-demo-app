import fb from '../../firebase/config';
import commentsSlice from './commentsSlice';
import loaderSlice from '../loader/loaderSlice';

export const getComments = () => async (dispatch) => {
  await fb
    .firestore()
    .collectionGroup('comments')
    .onSnapshot((data) => {
      dispatch(loaderSlice.actions.setLoadingTrue());
      try {
        const comments = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        dispatch(commentsSlice.actions.getCommentsSuccess(comments));
        dispatch(commentsSlice.actions.setErrorNull());
      } catch (error) {
        dispatch(commentsSlice.actions.getCommentsError(error.message));
      }
      dispatch(loaderSlice.actions.setLoadingFalse());
    });
};

export const addComment = (comment) => async (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  try {
    const addCommentResponse = await fb
      .firestore()
      .collection('posts')
      .doc(comment.postId)
      .collection('comments')
      .add(comment);
    dispatch(
      commentsSlice.actions.addCommentSuccess({
        ...comment,
        id: addCommentResponse.id,
      })
    );
    dispatch(commentsSlice.actions.setErrorNull());
  } catch (error) {
    dispatch(commentsSlice.actions.addCommentError(error.message));
  }
  dispatch(loaderSlice.actions.setLoadingFalse());
};
