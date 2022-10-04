import {
  convertCollectionSnapshotToMap,
  firestoreStoreApp
} from "./../../componentes/store/components/shop/firebaseShop.utils";

export const SHOP_DATA_START = "SHOP_DATA_START";
export const SHOP_DATA_SUCCESS = "SHOP_DATA_SUCCESS";
export const SHOP_DATA_ERROR = "SHOP_DATA_ERROR";

export const fetchCollectionsStart = () => ({
  type: SHOP_DATA_START,
});

export const fetchCollectionSuccess = (collectionMaps) => ({
  type: SHOP_DATA_SUCCESS,
  payload: collectionMaps,
});

export const fetchCollectionError = (errorMessage) => ({
  type: SHOP_DATA_ERROR,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispath) => {
    console.log("DISPATCHING ..");
    const collectionRef = firestoreStoreApp.collection("shopData");
    dispath(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsToMap = convertCollectionSnapshotToMap(snapshot);
        dispath(fetchCollectionSuccess(collectionsToMap));
      })
      .catch((error) => {
        console.log("ERROR ", error);
        dispath(fetchCollectionError(error.message));
      });
  };
};
