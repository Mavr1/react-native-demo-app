import fb from '../../firebase/config';
import commentsSlice from './commentsSlice';
import loaderSlice from '../loader/loaderSlice';

export const getComments = (postId) => async (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  try {
    const getCommentsResponse = await fb
      .firestore()
      .collection('posts')
      .doc(postId)
      .collection('comments')
      .get();
    // await fb
    //   .firestore()
    //   .collection('posts')
    //   .doc(postId)
    //   .collection('comments')
    //   .onSnapshot((data) =>
    //     console.log(
    //       data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).length
    //     )
    //   );

    let data = [];
    getCommentsResponse.forEach((doc) =>
      data.push({ ...doc.data(), id: doc.id })
    );
    dispatch(commentsSlice.actions.getCommentsSuccess(data));
    dispatch(commentsSlice.actions.setErrorNull());
  } catch (error) {
    dispatch(commentsSlice.actions.getCommentsError(error.message));
  }
  dispatch(loaderSlice.actions.setLoadingFalse());
};

export const addComment = (comment, postId) => async (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  try {
    const addCommentResponse = await fb
      .firestore()
      .collection('posts')
      .doc(postId)
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
