import {
  ADD_ITEM_CART,
  CLEAR_CHART,
  REMOVE_ITEM_CART,
  REMOVE_ITEM_QUANTITY,
  TOGGLE_CART_PANEL,
} from "./cart-action";
import { addItemsToCartUtil, removeItemQuantityUtil } from "./cart-utils";

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
        cartItems: addItemsToCartUtil([...state.cartItems], action.payload),
      };

    case REMOVE_ITEM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case REMOVE_ITEM_QUANTITY:
      return {
        ...state,
        //cartItems:  [...state.cartItems, action.payload],
        cartItems: removeItemQuantityUtil([...state.cartItems], action.payload),
      };

    case CLEAR_CHART:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
