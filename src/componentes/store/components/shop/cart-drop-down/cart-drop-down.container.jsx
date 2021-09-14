import React from "react";
import { Query, Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import CartDropDownComponent from "./cart-dropdown.component";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const CartDropDownContainer = () => {
  return (
    <Mutation mutation={TOGGLE_CART_HIDDEN}>
      {(toogleCartHidden) => (
        <Query query={GET_CART_ITEMS}>
          {({ data: { cartItems } }) => {
            return (
              <CartDropDownComponent
                cartItems={cartItems}
                toogleCartPanel={toogleCartHidden}
              />
            );
          }}
        </Query>
      )}
    </Mutation>
  );
};


export default CartDropDownContainer;