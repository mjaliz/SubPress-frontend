import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

import config from "../config.json";
import jwtDecode from "jwt-decode";

const tokenKey = "token";

const slice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    loading: false,
  },
  reducers: {
    userSignUpRequested: (user, action) => {
      user.loading = true;
    },
    userSignUpReceived: (user, action) => {
      console.log(action);
      user.loading = false;
      localStorage.setItem(tokenKey, action.payload.token);
      window.location = "/demo2.mp4";
    },
    userSignUpFailed: (user, action) => {
      user.loading = false;
    },
    currentUserReceived: (user, action) => {
      user.currentUser = action.payload;
    },
  },
});

export const {
  userSignUpRequested,
  userSignUpReceived,
  userSignUpFailed,
  currentUserReceived,
} = slice.actions;

export default slice.reducer;

export const signUp = (user) =>
  apiCallBegan({
    url: config.usersUrl,
    method: "post",
    data: {
      name: user.name,
      email: user.email,
      password: user.password,
    },
    onSuccess: userSignUpReceived.type,
  });

export const getCurrentUser = () => (dispatch, getState) => {
  try {
    const jwt = localStorage.getItem(tokenKey);
    dispatch({ type: currentUserReceived.type, payload: jwtDecode(jwt) });
  } catch (ex) {
    return null;
  }
};
