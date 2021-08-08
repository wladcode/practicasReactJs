export const TOGGLE_CART_PANEL = "TOGGLE_CART_PANEL";
export const ADD_ITEM_CART = "ADD_ITEM_CART";
export const REMOVE_ITEM_CART = "REMOVE_ITEM_CART";
export const REMOVE_ITEM_QUANTITY = "REMOVE_ITEM_QUANTITY";

export const toogleCartPanel = () => {
  return {
    type: TOGGLE_CART_PANEL,
  };
};

export const addItemToCart = (item) => {
  return {
    type: ADD_ITEM_CART,
    payload: item,
  };
};

export const removeItemFromCart = (item) => {
  return {
    type: REMOVE_ITEM_CART,
    payload: item,
  };
};

export const removeItemQuantity = (item) => {
  return {
    type: REMOVE_ITEM_QUANTITY,
    payload: item,
  };
};
