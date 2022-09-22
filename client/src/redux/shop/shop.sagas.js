import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  convertCollectionSnapshotToMap,
  firestoreStoreApp,
} from "./../../componentes/store/components/shop/firebaseShop.utils";
import {
  fetchCollectionError,
  fetchCollectionSuccess,
  SHOP_DATA_START,
} from "./shop-actions";

const shopSagas = [takeLatest(SHOP_DATA_START, fetchCollection)];

export default shopSagas;

export function* fetchCollection() {
  console.log("COLLECTION!");

  try {
    const collectionRef = firestoreStoreApp.collection("shopData");
    const snapshot = yield collectionRef.get();
    const collectionsToMap = yield call(
      convertCollectionSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionSuccess(collectionsToMap));
  } catch (error) {
    console.log("ERROR ", error);
    yield put(fetchCollectionError(error.message));
  }
}
/*
export function* onShopDataStart() {
  yield takeLatest(SHOP_DATA_START, fetchCollection);
}

export default function* shopSagas() {
  yield all([call(onShopDataStart)]);
}
*/
