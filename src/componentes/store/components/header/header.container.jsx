import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import HeaderComponent from "./header.component";

//  @cliente, indica que se va a tomar del cache del cliente (no del servidor)
const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const HeaderContainer = () => {
  return (
    <Query query={GET_CART_HIDDEN}>
      {({ data: { cartHidden } }) => <HeaderComponent cartHidden={cartHidden} />}
    </Query>
  );
};


export default HeaderContainer;