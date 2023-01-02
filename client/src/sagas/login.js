import { takeLatest } from "redux-saga/effects";
import { auth } from "../componentes/store/components/ds/ds-auth/firebase.utils";
import { types as loginTypes } from "../redux/login";
export const loginSagas = [takeLatest(loginTypes.LOGIN_REQUEST, loginRequest)];

function* loginRequest({ payload }) {
    console.log("payload, ", payload);

    const { email, password } = payload;

    try {
        yield auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
        console.log("ERROR: ", error);
    }
}
