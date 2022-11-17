import { call, put, takeLatest } from "redux-saga/effects";
import {
  actions as geolocationActions,
  GEOLOCATION_START,
} from "./geolocation-actions";
import { geolocationReverse } from "./geolocation-middleware";
import getGeolocation from "./geolocation-utils";
const geoLocationSagas = [takeLatest(GEOLOCATION_START, loadGeolocation)];

export default geoLocationSagas;

function* loadGeolocation() {
  console.log("ENTRANDO ...");

  const position = yield call(getGeolocation);

  const location = {
    latitude: position.lat,
    longitude: position.lng,
  };

  let geoData = yield call(callGeoLocation, position.lat, position.lng);

  if (geoData.error) {
    yield put(geolocationActions.geolocationFail);
    geoData = yield call(callGeoLocation, position.lat, position.lng);

    if (geoData.error) {
      yield put(geolocationActions.geolocationFail);
      geoData = yield call(callGeoLocation, position.lat, position.lng);
      yield call(setGeolocationData, position, geoData, true);
    } else {
      yield call(setGeolocationData, position, geoData, false);
    }
  } else {
    yield call(setGeolocationData, position, geoData, false);
  }

  console.log("geoData ", geoData);
}

function* callGeoLocation(lat, lng) {
  console.log("Calling getGeoLocation");
  return yield call(geolocationReverse, lat, lng);
}

function* setGeolocationData(position, geoData, isUnknow) {
  console.log("GEO DATA SUCCESS", geoData);
  yield put(geolocationActions.geolocationSuccess(position, geoData, isUnknow));
}
