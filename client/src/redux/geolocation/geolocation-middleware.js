import axios from "axios";
import { store } from "../store";
import { GEOLOCATION_FAIL } from "./geolocation-actions";

const defaultResponse = {
  error: "Error",
  city: "Desconocido",
  country: "Desconocido",
};

const googleAxios = axios.create();
googleAxios.defaults.timeout = 10000;

googleAxios.defaults.baseURL =
  "https://maps.googleapis.com/maps/api/geocode/json?latlng=LONGITUD,LATITUD&key=GOOLE_KEY_MAPS";
googleAxios.defaults.headers.common.Accept = "application/json";

googleAxios.interceptors.request.use((request) => {
  const valuesRequest = request.url.split("/");
  const urlKey = request.baseURL
    .replace("LONGITUD", valuesRequest[0])
    .replace("LATITUD", valuesRequest[1])
    .replace("GOOLE_KEY_MAPS", process.env.REACT_APP_GOOLE_KEY_MAPS);

  request.url = urlKey;

  return request;
});

googleAxios.interceptors.response.use(
  (response) => {
    console.log("GEO RESPONSE ", response);
    if (response.status === 200 && response.data.status === "OK") {
      const { results } = response.data;

      // se agrega el atributo ya que es una propiedad de google maps platform
      // eslint-disable-next-line
      const { address_components } = results[0];

      const geoData = address_components.reduce((next, key) => {
        if (key.types[0] === "country") {
          return { ...next, country: key.long_name };
        }
        if (key.types[0] === "locality") {
          return { ...next, city: key.long_name };
        }
        return next;
      }, {});

      return geoData;
    }

    response.type = response.data.status;
    return defaultResponse;
  },
  (error) => {
    // se agrega el atributo para saber que es un error del api
    // eslint-disable-next-line
    console.log("ERROR ON GEO API ", error);
    return defaultResponse;
  }
);

export function channel() {
  const { isAssistantLogin } = store.getState().assistant;

  if (isAssistantLogin) {
    return "assistant";
  }
  return window.cordova ? "phonegap" : "frontend";
}

export const geolocationReverse = (longitud, latitud) => {
  const { geoData, isUnknow } = store.getState().geolocation;

  console.log(geoData, isUnknow)

  if (isUnknow) {
    return googleAxios({
      url: `${longitud}/${latitud}`,
      method: "GET",
    });
  } else {
    return geoData;
  }
};
