import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import {
    selectIsCollectionLoaded
} from "../../../../redux/shop/shop-selector";
import CollectionPage from './collection-page.componente';
import DSSnipper from './../../components/ds/ds-spinner/ds-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state),
});

/*
  Sin compose
  const CollectionContainer = connect(mapStateToProps)(DSSnipper(CollectionPage));
  */

/* Con compose */
const CollectionContainer = compose(
  connect(mapStateToProps),
  DSSnipper
)(CollectionPage);

export default CollectionContainer;