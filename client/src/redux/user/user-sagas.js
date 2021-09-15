import { all, call, put, takeLatest } from "redux-saga/effects";
import {
    auth,
    createUserProfileDocument,
    getCurrentUser
} from "./../../componentes/store/components/ds/ds-auth/firebase.utils";
import {
    CHECK_USER_SESSION, userLogOutSuccess,
    userSignUpSuccess, USER_LOGOUT_START,
    USER_SIGNUP_START,
    USER_SIGNUP_SUCCESS
} from "./user.actions";

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
  } catch (error) {}
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(userLogOutSuccess());
  } catch (error) {
    yield console.log("ERROR AL CERRAR LA SESSION");
  }
}

export function* onSignOutStart() {
  yield takeLatest(USER_LOGOUT_START, signOut);
}

export function* sagaSignUpStart(userCredenciales) {
  console.log("USER CREDENCIALS: ", userCredenciales);

  try {
    const { email, password, fullname } = userCredenciales.payload;

    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    yield put(userSignUpSuccess({ user, additionalData: { fullname } }));
  } catch (error) {
    yield console.log("ERROR EN SIGNUP: ", error.message);
  }
}

export function* onSignUpStart() {
  yield takeLatest(USER_SIGNUP_START, sagaSignUpStart);
}

export function* sagaSignInAfterSingUp(data) {

    console.log("USER data: ", data);
  try {
    const { user, additionalData } = data.payload;

    yield createUserProfileDocument(user, { additionalData });

  } catch (error) {
    yield console.log("ERROR EN SIGNUP: ", error.message);
  }
}
export function* onSignUpSuccess() {
  yield takeLatest(USER_SIGNUP_SUCCESS, sagaSignInAfterSingUp);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
