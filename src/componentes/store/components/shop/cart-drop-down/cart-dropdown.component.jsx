import React from "react";
import "./cart-dropdown.scss";
import DSButtonComponent from "./../../ds/ds-button/ds-button.component";
import CartItem from "./../item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "./../../../../../redux/char/cart-selectors";
import DSAlert from "./../../ds/ds-alert/ds-alert.component";
import { withRouter } from "react-router-dom";
import { toogleCartPanel } from "../../../../../redux/char/cart-action";

const CartDropDownComponent = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <DSAlert type="warning" message="No existen Registros" />
      )}
    </div>
    <DSButtonComponent
      onClick={() => {
        history.push("/checkout");
        dispatch(toogleCartPanel());
      }}
    >
      PAGAR
    </DSButtonComponent>
  </div>
);

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default withRouter(connect(mapStateToProps)(CartDropDownComponent));
