import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  checkUserSession,
  googleSignInStart,
  emailSignInStart,
  setCurrentUserOnSuccess,
  signInFailed,
  signUpStart,
  signUpSuccess,
  signUpFailed,
  signOutStart,
} from "./user.slice";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInExistingUserUsingEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

//main action 1
export function* getSnapShotFromUserAuth(userAuth, additionalDetailes) {
  try {
    const UserSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetailes
    );

    yield put(
      setCurrentUserOnSuccess({ id: UserSnapshot.id, ...UserSnapshot.data() })
    );
    yield put(signInFailed(null));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

//Watcher for Refresh Checking user signIn
export function* onCheckUserSession() {
  yield takeLatest(checkUserSession.type, isUserAuthenticated);
}

//Next Performer
export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);

    if (!userAuth) {
      return;
    }

    yield call(getSnapShotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

//watcher googlesign in started
export function* onUserGoogleSignInStart() {
  yield takeLatest(googleSignInStart.type, signInWithGooglePopUp);
}
//Next Performer
export function* signInWithGooglePopUp() {
  try {
    const userAuth = yield call(signInWithGooglePopup);
    yield call(getSnapShotFromUserAuth, userAuth.user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

// watcher sign in with Email and Password
export function* onEmailSignInStart() {
  yield takeLatest(emailSignInStart.type, SignInWithEmail);
}
//Next performer
export function* SignInWithEmail({payload:{ email, password }}) {
  try {
    const { user } = yield call(
      signInExistingUserUsingEmailAndPassword,
      email,
      password
    );
    yield call(getSnapShotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

//watcher for SignUp started
export function* onSignUpStart() {
  yield takeLatest(signUpStart.type, SignUp);
}
//next performer
export function* SignUp({payload: { email, password, displayName }} ) {
  try {
    console.log(email, password)
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    console.log(user)
    //Action
    yield put(signUpSuccess({user ,additionalDetailes:{displayName}}));
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      alert("Already Used Email ");
      yield put(signUpFailed("Already Used Email "));
    } else {
      put(signUpFailed(`GOT AN ERROR WHILE CREATING USER , ${error.message}`));
    }
  }
}

//Watcher for Sign Up success
export function* onSignUpSuccess() {
  yield takeLatest(signUpSuccess.type, signInAfterSignUp);
}
//next Performer
export function* signInAfterSignUp({payload:{ user, additionalDetailes }} ) {
  yield call(getSnapShotFromUserAuth, user, additionalDetailes);
}

//Watcher for Sign-Out Start
export function* onSignOutStart() {
  yield takeLatest(signOutStart.type, signOutSuccess);
}

//next Performer
export function* signOutSuccess() {
  try {
    const user = yield call(signOutUser);
    yield put(setCurrentUserOnSuccess(user));
  } catch (error) {}
}

//Accumulater
export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onUserGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
