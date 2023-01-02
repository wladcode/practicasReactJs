import { all } from "redux-saga/effects";
import { loginSagas } from "../sagas/login";
import chartSaga from "./char/char-sagas";
import geoLocationSagas from "./geolocation/geolocation-sagas";
import shopSagas from "./shop/shop.sagas";
import userSagas from "./user/user-sagas";

export default function* rootSaga() {
    yield all([...shopSagas, ...userSagas, ...chartSaga, ...geoLocationSagas, ...loginSagas]);
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
