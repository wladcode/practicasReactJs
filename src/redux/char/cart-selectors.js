/*
Creacion de selectores para uno de memoized
 */
import { createSelector } from "reselect";

//Input selector
const selectCart = (state) => state.cart;

//Ouput selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0)
);
