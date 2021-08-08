export const TOGGLE_CART_PANEL = "TOGGLE_CART_PANEL";
export const ADD_ITEM_CART = "ADD_ITEM_CART";

export const toogleCartPanel = () => {
  return {
    type: TOGGLE_CART_PANEL,
  };
};


export const addItemToCart = (item) => {
  return {
    type: ADD_ITEM_CART,
    payload: item
  };
};
