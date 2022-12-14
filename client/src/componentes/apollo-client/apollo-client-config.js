import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient, gql } from "apollo-boost";

const httpLink = createHttpLink({
  uri: "https:///crwn-clothing.com",
});
const cache = new InMemoryCache();

const apolloClientConfig = new ApolloClient({
  link: httpLink,
  cache,
  fetchOptions: {
    mode: "no-cors",
  },
});
/*
apolloClientConfig.query({
  query: gql`
    {
      getCollectionsByTitle(title: "hats") {
        id
        title
        items {
          id
          name
          price
          imageUrl
        }
      }
    }
  `,
}).then(response => {
  console.log("response: ", response)
});
*/

export default apolloClientConfig;
