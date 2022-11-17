import { store } from "../store";

function getLocation() {
  return new Promise((resolve, reject) => {
    const { geolocation } = navigator;

    geolocation.getCurrentPosition(resolve, reject, {
      timeout: 5000,
      enableHighAccuracy: true,
      maximumAge: 0,
    });
  });
}

function getGeolocation(fallBackValue = getDefaultPosition()) {
  const { locationFound: currentLocation } = store.getState().geolocation;

  if (!currentLocation || Object.keys(currentLocation).length === 0) {
    const location = getLocation()
      .then((position) => {
        console.log("position ", position);
        const locationFound = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy,
        };

        // se agrega la consola para determinar si se pudo obtener la ubicacion
        // eslint-disable-next-line no-console
        console.log("locationFound ", locationFound);

        return locationFound;
      })
      .catch(() => fallBackValue);

    return location;
  }

  return currentLocation;
}

const getDefaultPosition = () => {
  const value = "-34.6180325|-58.4453073";
  if (value) {
    const values = value.split("|");
    return { lat: values[0], lng: values[1] };
  }
};

export default getGeolocation;
