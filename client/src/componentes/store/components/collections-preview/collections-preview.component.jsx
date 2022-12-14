import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "./../../../../redux/shop/shop-selector";
import PreviewCollectionComponent from "./../preview/preview.component";
import "./collections-preview.scss";

const CollectionOverViewComponent = ({ collections }) => {
    console.log("CONTAINE R ", collections);

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
