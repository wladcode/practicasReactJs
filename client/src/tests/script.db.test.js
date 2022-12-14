const googleSearch = require("./script.db");

it("Testing null values", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

const dbMock = ["dog.com", "cheesepuff.com", "dogpciture.com"];

test("Testing google dog", () => {
    const result = googleSearch("dog", dbMock);

    expect(result).toContain("dog.com");
});

test("Testing google empty", () => {
    const result = googleSearch("testest", dbMock);

    expect(result).toEqual([]);
});
