import fb from '../../firebase/config';
import authSlice from '../auth/authSlice';
import loaderSlice from '../loader/loaderSlice';

export const register = (name, eMail, password) => async (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  try {
    await fb.auth().createUserWithEmailAndPassword(eMail, password);
    const user = await fb.auth().currentUser;
    await user.updateProfile({
      displayName: name,
    });
    const { displayName, email, uid } = await fb.auth().currentUser;
    dispatch(authSlice.actions.registerSuccess({ displayName, email, uid }));
    dispatch(authSlice.actions.setErrorNull());
  } catch (error) {
    dispatch(authSlice.actions.registerError(error.message));
  }
  dispatch(loaderSlice.actions.setLoadingFalse());
};

export const login = (eMail, password) => async (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  try {
    await fb.auth().signInWithEmailAndPassword(eMail, password);
    const { displayName, email, uid } = await fb.auth().currentUser;
    dispatch(authSlice.actions.loginSuccess({ displayName, email, uid }));
    dispatch(authSlice.actions.setErrorNull());
  } catch (error) {
    dispatch(authSlice.actions.loginError(error.message));
  }
  dispatch(loaderSlice.actions.setLoadingFalse());
};

export const logout = () => async (dispatch) => {
  dispatch(loaderSlice.actions.setLoadingTrue());
  try {
    await fb.auth().signOut();
    dispatch(authSlice.actions.logoutSuccess());
    dispatch(authSlice.actions.setErrorNull());
  } catch (error) {
    dispatch(authSlice.actions.logoutError(error.message));
  }
  dispatch(loaderSlice.actions.setLoadingFalse());
};
