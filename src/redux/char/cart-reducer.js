import { ADD_ITEM_CART, TOGGLE_CART_PANEL } from "./cart-action";
import { addItemsToCartUtil } from './cart-utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_PANEL:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case ADD_ITEM_CART:
      return {
        ...state,
        //cartItems:  [...state.cartItems, action.payload],
        cartItems : addItemsToCartUtil([...state.cartItems], action.payload)
      };

    default:
      return state;
  }
};

export default cartReducer;
