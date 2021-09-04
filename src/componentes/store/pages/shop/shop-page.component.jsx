import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import {
  fetchCollectionsStartAsync,
  fetchCollectionsStart,
} from "../../../../redux/shop/shop-actions";
import CollectionOverViewContainer from "./../../components/collections-overview/collections-overview.container";
import CollectionContainer from "./../collection/collection-page.container";

/*
Se reemplaza por el contenedor CollectionOverViewContainer
const CollectionOverViewComponentWithSpinner = DSSnipper(
  CollectionOverViewComponent
);
*/
/*
Se reemplza por el contenedor CollectionContainer
const CollectionPageWithSpinner = DSSnipper(CollectionPage);
*/

function ShopPage({ fetchCollectionsStart, match }) {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  // componentDidMount() {
  /* CON THUNKS
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();

     */

  /* CON SAGA
   */

  // fetchCollectionsStart();

  /*
    Uso de APIS REST
     
    axios.get(
        "https://firestore.googleapis.com/v1/projects/diamoncode-store/databases/(default)/documents/shopData"
      )
      .then((response) => console.log("REST COLLECTIONS: ",response))
      .catch((error) => console.log("error", error));
*/
  /*
    Uso de PROMESAS

      const collectionRef = firestoreStoreApp.collection("shopData");
        
    collectionRef.get().then((snapshot) => {
      const collectionsToMap = convertCollectionSnapshotToMap(snapshot);
      updateShopData(collectionsToMap);

      this.setState({
        loading: false,
      });
    });
*/
  /*
    Uso de OBSERVABLE
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsToMap = convertCollectionSnapshotToMap(snapshot);
      console.log("collectionsToMap: ", collectionsToMap);
      updateShopData(collectionsToMap);

      this.setState({
        loading:false
      })
    });
    */
  //}

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverViewContainer}
      />

      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
}

/*
CON THUNKS
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});
*/

/*
CON SAGA
*/
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
