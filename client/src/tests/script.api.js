const fetch = require("node-fetch");

const getPeoplePromise = (fetch) => {
    return fetch("https://breakingbadapi.com/api/characters")
        .then((response) => response.json())
        .then((data) => {
            return { count: 100, results: data };
        });
};

const getPeople = async (fetch) => {
    const response = await fetch("https://breakingbadapi.com/api/characters");
    const data = await response.json();

    //console.log(data);
    return { count: 100, results: data };
};

getPeople(fetch);

module.exports = {
    getPeople,
    getPeoplePromise,
};
