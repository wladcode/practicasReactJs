import { Component, Fragment } from "react";
import { connect } from "react-redux";
import { actions as geolocationActions } from "../../redux/geolocation/geolocation-actions";
import { selectors as geolocationSelectors } from "../../redux/geolocation/geolocation-reducer";
import { shape, string, func, bool } from "prop-types";
import GoogleMapContainer from "./GoogleMapContainer";
import { Col } from "react-bootstrap";

class Geolocation extends Component {
  static propTypes = {
    geoData: shape({}).isRequired,
    fetching: bool.isRequired,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(geolocationActions.geolocationStart());
  }
  render() {
    const { fetching, geoData, location } = this.props;
    return (
      <Fragment>
        {fetching && <div>LOADING ...</div>}
        {!fetching && (
          <div>
            <ul>
              <li>Ciudad: {geoData.city}</li>
              <li>Pais: {geoData.country}</li>
              <li>Latitud: {location.lat}</li>
              <li>Longitud: {location.lng}</li>
            </ul>

            <Col sm={12} md={12} lg={12} xl={12} className="col">
              <GoogleMapContainer google={window.google} positions={location} />
            </Col>
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  fetching: geolocationSelectors.getFetching(state),
  geoData: geolocationSelectors.getGeoData(state),
  location: geolocationSelectors.getLocation(state),
});

export default connect(mapStateToProps)(Geolocation);
