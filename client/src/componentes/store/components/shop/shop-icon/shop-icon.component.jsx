import React from "react";
import "./shop-icon.scss";

import { toogleCartPanel } from "../../../../../redux/char/cart-action";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../../../../assets/icons/shopping-cart.svg";
import { selectCartItemsCount } from "../../../../../redux/char/cart-selectors";

const CartIconComponent = ({ countItems, dispatch }) => (
    <div className="cart-icon" onClick={() => dispatch(toogleCartPanel())}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{countItems}</span>
    </div>
);

const mapStateToProps = (state) => {
    return {
        countItems: selectCartItemsCount(state),
    };
};

/*
SI NO SE SETEA, se pasa la funcion dispatch como propiedad en el componente
const mapDispatchToProps = (dispacth) => {
  return {
    toogleCartPanel: (cart) => dispacth(toogleCartPanel()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartIconComponent);
*/

export default connect(mapStateToProps)(CartIconComponent);
