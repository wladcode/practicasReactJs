import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { fetchCollectionsStartAsync } from "../../../../redux/shop/shop-actions";
import { selectIsCollectionFetching } from "./../../../../redux/shop/shop-selector";
import CollectionOverViewComponent from "./../../components/collections-preview/collections-preview.component";
import DSSnipper from "./../../components/ds/ds-spinner/ds-spinner.component";
import CollectionPage from "./../collection/collection-page.componente";

const CollectionOverViewComponentWithSpinner = DSSnipper(
  CollectionOverViewComponent
);
const CollectionPageWithSpinner = DSSnipper(CollectionPage);

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();

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
  }

  render() {
    const { match, isCollectionFetching } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverViewComponentWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
