import { put, takeLatest } from "redux-saga/effects";
import { USER_LOGOUT_SUCCESS } from "../user/user.actions";
import { clearChart } from "./cart-action";

const chartSaga = [takeLatest(USER_LOGOUT_SUCCESS, sagaClearChart)];

export default chartSaga;

export function* sagaClearChart() {
    yield put(clearChart());
}
