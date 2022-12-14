const { response } = require("express");
const fetch = require("node-fetch");
const swapi = require("./script.api");

test("callas swapi to get people", (done) => {
    expect.assertions(1);
    swapi.getPeople(fetch).then((response) => {
        expect(response.count).toEqual(100);
        done();
    });
});

test("callas swapi to get people with await", (done) => {
    expect.assertions(2);
    swapi.getPeoplePromise(fetch).then((response) => {
        expect(response.count).toEqual(100);
        expect(response.results.length).toBeGreaterThan(5);
        done();
    });
});

test("Test with a mock", () => {
    const mockFetch = jest.fn().mockReturnValue(
        Promise.resolve({
            json: () =>
                /*
        Promise.resolve({
          count: 82,
          results: [0, 1, 2, 3, 4, 5],
        }),
        */
                Promise.resolve([0, 1, 2, 3, 4, 5]),
        }),
    );

    expect.assertions(4);
    return swapi.getPeoplePromise(mockFetch).then((response) => {
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith("https://breakingbadapi.com/api/characters");
        //console.log("RESPONSE: ", response);
        expect(response.count).toEqual(100);
        expect(response.results.length).toBeGreaterThan(5);
    });
});
