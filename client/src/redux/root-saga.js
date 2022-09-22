import { all, call, spawn } from "redux-saga/effects";
import shopSagas from "./shop/shop.sagas";
import userSagas from "./user/user-sagas";
import chartSaga from "./char/char-sagas";

export default function* rootSaga() {
  yield all(    [
    ...shopSagas, 
    ...userSagas, 
    ...chartSaga
  ]);
/*
  const sagas = [shopSagas, userSagas, chartSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (error) {
            console.log(error);
          }
        }
      })
    )
  );
  */
}
