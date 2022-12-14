import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { func, number, shape, string } from "prop-types";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

export class GoogleMapContainer extends Component {
    static propTypes = {
        dispatch: func.isRequired,
        google: shape({}).isRequired,
        positions: shape({
            latitude: number,
            longitude: number,
            date: string,
        }),
    };

    static defaultProps = {
        positions: null,
    };

    render() {
        const { google, positions } = this.props;

        return (
            <Map
                google={this.props.google}
                style={{
                    position: "relative",
                    width: "100%",
                    height: "62vh",
                }}
                initialCenter={{
                    lat: positions.lat,
                    lng: positions.lng,
                }}
                keyboardShortcuts={false}
                mapTypeControl={false}
                streetViewControl={false}
                rotateControl={false}
                fullscreenControl={false}
                zoom={15}
                centerAroundCurrentLocation
                className="googleMap"
            >
                <Marker onClick={this.onMarkerClick} name={"Current location"} />
            </Map>
        );
    }
}

const mapStateToProps = () => ({
    customMapsApi: process.env.REACT_APP_GOOLE_KEY_MAPS,
});

export default connect(mapStateToProps)(
    GoogleApiWrapper((props) => ({
        apiKey: props.customMapsApi,
    }))(GoogleMapContainer),
);
