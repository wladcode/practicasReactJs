/*
Creacion de selectores para uno de memoized
 */
import { createSelector } from "reselect";

//Input selector
const selectCart = (state) => state.cart;

console.log("selectCart ", selectCart)

//Ouput selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectHiddenPanel = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0)
);


export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accumulator, item) => accumulator + (item.quantity*item.price), 0)
);