import React from "react";
import { Route } from "react-router-dom";
import CollectionOverViewComponent from './../../components/collections-preview/collections-preview.component';
import CollectionPage from './../collection/collection-page.componente';

const ShopPage = ({ match }) => {

  console.log("match: ", match)

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component ={ CollectionOverViewComponent} />
      <Route path={`${match.path}/:collectionId`} component ={ CollectionPage} />
    </div>
  );
};


export default ShopPage;
