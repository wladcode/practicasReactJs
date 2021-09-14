import { CardHeader } from "@material-ui/core";
import { gql } from "apollo-boost";
import { addItemsToCartUtil } from "./../../redux/char/cart-utils";

export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }

  extend type Mutation {
    ToggleCartHidden: Boolean!
    AddItemToCart(item: Item!): [Item]!
  }
`;

//  @cliente, indica que se va a tomar del cache del cliente (no del servidor)
const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

export const resolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, _context, _info) => {
      const { cache } = _context;

      // Se lee un query
      const data = cache.readQuery({
        query: GET_CART_HIDDEN,
      });

      const { cartHidden } = data;

      // Se actualiza el query con el valor obtenido (el valor contrario en este caso)
      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: {
          cartHidden: !cartHidden,
        },
      });

      return !cartHidden;
    },

    addItemToCart: (_root, _args, _context, _info) => {
      const { item } = _args;
      const { cache } = _context;

      const data = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      const { cartItems } = data;

      const newCartitems = addItemsToCartUtil(cartItems, item);

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: {
          cartItems: newCartitems,
        },
      });

      return newCartitems;
    },
  },
};
