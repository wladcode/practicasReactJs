import React from "react";

import "./collections-preview.scss";
import { selectCollections, selectCollectionsForPreview } from "./../../../../redux/shop/shop-selector";
import { connect } from "react-redux";
import PreviewCollectionComponent from "./../preview/preview.component";
import { createStructuredSelector } from 'reselect';

const CollectionOverViewComponent = ({collections}) => {

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollectionComponent key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverViewComponent);
