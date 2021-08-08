import React from "react";
import "./cart-dropdown.scss";
import DSButtonComponent from "./../../ds/ds-button/ds-button.component";
import CartItem from "./../item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "./../../../../../redux/char/cart-selectors";
const CartDropDownComponent = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <DSButtonComponent>PAGAR</DSButtonComponent>
  </div>
);

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default connect(mapStateToProps)(CartDropDownComponent);
