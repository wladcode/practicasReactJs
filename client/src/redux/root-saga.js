import { all, call, spawn } from "redux-saga/effects";
import fetchCollectionsStart from "./shop/shop.sagas";
import userSagas from "./user/user-sagas";
import chartSaga from "./char/char-sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas), call(chartSaga)]);
  /*
  const sagas = [fetchCollectionsStart, userSagas, chartSaga];

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
  );*/
}
