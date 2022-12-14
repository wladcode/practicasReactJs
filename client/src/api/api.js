const BASE_URL = "http://localhost:3001";
const BASE_URL_RICKY = "https://rickandmortyapi.com/api/character/";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) => delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
    await simulateNetworkLatency();

    options.headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
    };

    const url = BASE_URL + endpoint;
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

async function callRickyAndMortiApi(endpoint, options = {}) {
    await simulateNetworkLatency();

    options.headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
    };

    const url = BASE_URL_RICKY + endpoint;
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

const api = {
    rickyAndMorti: {
        lisCharacters(nextPage) {
            return callRickyAndMortiApi("?page=" + nextPage);
        },
    },
    badges: {
        list() {
            return callApi("/badges");
            //return [];// simulacion de datos vacios
            //throw new Error('500: Server Error') // simulacion de error
        },

        create(badge) {
            console.log(badge);
            return callApi(`/badges`, {
                method: "POST",
                body: JSON.stringify(badge),
            });

            //throw new Error('500: Server Error') // simulacion de error
        },
        read(badgeId) {
            return callApi(`/badges/${badgeId}`);
        },
        update(badgeId, updates) {
            return callApi(`/badges/${badgeId}`, {
                method: "PUT",
                body: JSON.stringify(updates),
            });
        },
        // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
        remove(badgeId) {
            return callApi(`/badges/${badgeId}`, {
                method: "DELETE",
            });
        },
    },
};

export default api;
