import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    checkUserSession: () => {
      return;
    },
    googleSignInStart: () => {
      return;
    },
    emailSignInStart: () => {
      return ;
    },
    setCurrentUserOnSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    signInFailed: (state, action) => {
      state.error = action.payload;
    },
    signUpStart: () => {
      return
    },
    signUpSuccess: () => {
      return ;
    },
    signUpFailed: () => {
      return ;
    },
    signOutStart: () => {
      return;
    },
  },
});

export const {
  checkUserSession,
  googleSignInStart,
  emailSignInStart,
  setCurrentUserOnSuccess,
  signInFailed,
  signUpStart,
  signUpSuccess,
  signUpFailed,
  signOutStart

} = userSlice.actions;

export default userSlice.reducer;
