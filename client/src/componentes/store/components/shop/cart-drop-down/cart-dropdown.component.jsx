import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { toogleCartPanel } from "../../../../../redux/char/cart-action";
import { selectCartItems } from "./../../../../../redux/char/cart-selectors";
import DSAlert from "./../../ds/ds-alert/ds-alert.component";
import DSButtonComponent from "./../../ds/ds-button/ds-button.component";
import CartItem from "./../item/cart-item.component";
import "./cart-dropdown.scss";

function CartDropDownComponent({ cartItems, dispatch }) {

  const history = useHistory();


  return (
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
          history.push("/shop/checkout");
          dispatch(toogleCartPanel());
        }}
      >
        PAGAR
      </DSButtonComponent>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

export default connect(mapStateToProps)(CartDropDownComponent);
