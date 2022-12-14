export const GEOLOCATION_START = "GEOLOCATION_START";
export const GEOLOCATION_SUCCESS = "GEOLOCATION_SUCCESS";
export const GEOLOCATION_FAIL = "GEOLOCATION_FAIL";

export const actions = {
    geolocationStart: () => {
        return {
            type: GEOLOCATION_START,
        };
    },

    geolocationSuccess: (locationFound, geoData, isUnknow) => ({
        type: GEOLOCATION_SUCCESS,
        locationFound,
        geoData,
        isUnknow,
    }),

    geolocationFail: () => {
        return {
            type: GEOLOCATION_FAIL,
        };
    },
};
