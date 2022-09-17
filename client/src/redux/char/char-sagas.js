import { put, takeLatest } from "redux-saga/effects";
import { USER_LOGOUT_SUCCESS } from "../user/user.actions";
import { clearChart } from "./cart-action";

export function* sagaClearChart() {
  yield put(clearChart());
}

const chartSaga = [takeLatest(USER_LOGOUT_SUCCESS, sagaClearChart)];

export default chartSaga;
