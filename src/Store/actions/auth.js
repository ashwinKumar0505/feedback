import axios from "axios";
import * as actionTypes from "./ActionTypes";
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authCheck = (token, userId) => {
  return {
    type: actionTypes.CHECK_AUTH,
    idToken: token,
    userId: userId,
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.LOG_OUT,
  };
};

export const checkAuthTimeOut = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logOut());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password) => {
  return dispatch => {
    dispatch(authStart());

    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDTh7wvqvLAdT8uAVoG_CgyUTMQLz4gN8M",
        authData,
      )
      .then(Response => {
        const expirationDate = new Date(
          new Date().getTime() + Response.data.expiresIn * 1000,
        );
        localStorage.setItem("token", Response.data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", Response.data.localId);
        dispatch(authSuccess(Response.data.idToken, Response.data.localId));
        dispatch(checkAuthTimeOut(Response.data.expiresIn));
      })
      .catch(error => {
        dispatch(authFail(error));
      });
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (!token) {
      dispatch(logOut());
    } else {
      const expirationDate = localStorage.getItem("expirationDate");
      if (expirationDate <= new Date()) {
        dispatch(logOut());
      } else {
        dispatch(authCheck(token, userId));
      }
    }
  };
};

export const changeTheLoginState = () => {
  return {
    type: actionTypes.CHANGE_THE_LOGIN_STATE,
  };
};
