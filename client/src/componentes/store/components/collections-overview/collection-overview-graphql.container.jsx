import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import CollectionOverViewComponent from "./../collections-preview/collections-preview.component";
import DSSnipper from "../ds/ds-spinner/ds-spinner.component";

const GET_COLLECTIONS_QUERY = gql`
  {
    collections {
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
`;

const CollectionsOverViewGraphQlContainer = () => {
  return (
    <Query query={GET_COLLECTIONS_QUERY}>
      {({ loading, error, data }) => {
        console.log("GRAPQL - loading: ", loading);
        console.log("GRAPQL - error: ", error);
        console.log("GRAPQL - : data", data);
        if (loading) return <DSSnipper />;

        return <CollectionOverViewComponent collections={data.collections} />;
      }}
    </Query>
  );
};

export default CollectionsOverViewGraphQlContainer;
