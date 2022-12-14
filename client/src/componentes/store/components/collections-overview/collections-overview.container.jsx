import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../../../redux/shop/shop-selector";
import CollectionOverViewComponent from "./../collections-preview/collections-preview.component";
import DSSnipper from "./../ds/ds-spinner/ds-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

/*
  Sin compose
  const CollectionOverViewContainer = connect(mapStateToProps)(DSSnipper(CollectionOverViewComponent));
  */

/* Con compose */
const CollectionOverViewContainer = compose(
  connect(mapStateToProps),
  DSSnipper
)(CollectionOverViewComponent);

export default CollectionOverViewContainer;
