import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient, gql } from "apollo-boost";
import { typeDefs, resolvers } from './../mutations/resolvers';

const httpLink = createHttpLink({
  uri: "https:///crwn-clothing.com",
});
const cache = new InMemoryCache();

const apolloClientConfig = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers
});

apolloClientConfig.writeData({
  data: {
    cartHidden: true,
    cartItems: []
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
