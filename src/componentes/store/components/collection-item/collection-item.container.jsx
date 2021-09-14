import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import CollectionItemComponent from "./collection-item.component";

const ADD_ITEM_TO_CHART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const CollectionItemContainer = (props) => {
  return (
    <Mutation mutation={ADD_ITEM_TO_CHART}>
      {(addItemToCart) => (
        <CollectionItemComponent
          {...props}
          addItem={(item) => addItemToCart({ variables: { item } })}
        />
      )}
    </Mutation>
  );
};

export default CollectionItemContainer;
