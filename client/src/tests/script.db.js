const googleDatabase = [
  "cats.com",
  "books.com",
  "apples.com",
  "robots.com",
  "dogs.com",
  "dogsQuito.com",
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });

  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

//console.log(googleSearch("dog", googleDatabase));

module.exports = googleSearch;
