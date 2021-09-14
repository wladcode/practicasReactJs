import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import CartIconComponent from "./shop-icon.component";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const CartIconContainer = () => {
  return (
    <Mutation mutation={TOGGLE_CART_HIDDEN}>
      {(toggleCartHidden) => (
        <CartIconComponent toogleCartPanel={toggleCartHidden} />
      )}
    </Mutation>
  );
};

export default CartIconContainer;
