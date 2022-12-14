import {
  GEOLOCATION_FAIL,
  GEOLOCATION_START,
  GEOLOCATION_SUCCESS,
} from "./geolocation-actions";

const INITIAL_STATE = {
  locationFound: {},
  geoData: {},
  isUnknow: true,
  fetching: false,
  dummy:"is a dummgy",
  anothher_dummy:"is a dummgy"
};

const geolocationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GEOLOCATION_START:
      return { ...state, fetching: true };

    case GEOLOCATION_SUCCESS:
      return {
        ...state,
        locationFound: action.locationFound,
        geoData: action.geoData,
        isUnknow: action.isUnknow,
        fetching: false,
      };
    case GEOLOCATION_FAIL:
      return {
        state: INITIAL_STATE,
        fetching: false,
      };

    default:
      return state;
  }
};

export const selectors = {
  getGeoData: ({ geolocation }) => geolocation.geoData,
  getFetching: ({ geolocation }) => geolocation.fetching,
  getLocation: ({ geolocation }) => geolocation.locationFound,
};

export default geolocationReducer;
