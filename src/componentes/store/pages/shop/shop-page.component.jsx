import React, { Component } from "react";
import { Route } from "react-router-dom";
import CollectionOverViewComponent from "./../../components/collections-preview/collections-preview.component";
import CollectionPage from "./../collection/collection-page.componente";

import {
  firestoreStoreApp,
  convertCollectionSnapshotToMap,
} from "./../../components/shop/firebaseShop.utils";
import { connect } from "react-redux";
import { updateShopData } from "../../../../redux/shop/shop-actions";
import DSSnipper from './../../components/ds/ds-spinner/ds-spinner.component';

const CollectionOverViewComponentWithSpinner = DSSnipper (CollectionOverViewComponent);
const CollectionPageWithSpinner = DSSnipper (CollectionPage);

class ShopPage extends Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateShopData } = this.props;
    const collectionRef = firestoreStoreApp.collection("shopData");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsToMap = convertCollectionSnapshotToMap(snapshot);
      console.log("collectionsToMap: ", collectionsToMap);
      updateShopData(collectionsToMap);

      this.setState({
        loading:false
      })
    });
  }

  render() {
    const { match } = this.props;
    const {loading} =  this.state;

    return (
      <div className="shop-page">
        <Route  exact  path={`${match.path}`}
          render={(props) => <CollectionOverViewComponentWithSpinner isLoading={loading} {...props} />}
        />
        <Route path={`${match.path}/:collectionId`}
          render={ (props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateShopData: (collectionsMap) =>
      dispatch(updateShopData(collectionsMap)),
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
