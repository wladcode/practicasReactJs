import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

import { ReactComponent as Logo } from "../../../../assets/crown.svg";
import { auth } from "./../ds/ds-auth/firebase.utils";
import { connect } from "react-redux";
import CartDropDownComponent from "../shop/cart-drop-down/cart-dropdown.component";
import CartIconComponent from "./../shop/shop-icon/shop-icon.component";

const HeaderComponent = ({ currentUser, cartHidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/shopping">
        <Logo className="logo" />
      </Link>
      <div className="options">
        {currentUser ? (
          <>
            User: {currentUser.name}
            <Link className="option" to="/shop">
              SHOP
            </Link>
            <Link className="option" to="/shop">
              CONTACT
            </Link>
            <div className="option" onClick={() => auth.signOut()}>
              SALIR
            </div>
            <CartIconComponent />
          </>
        ) : (
          <Link className="option" to="/signin">
            SING IN
          </Link>
        )}
      </div>

      {cartHidden ? null : <CartDropDownComponent />}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state: ", state);
  return {
    currentUser: state.user.currentUser,
    cartHidden: state.cart.hidden,
  };
};

export default connect(mapStateToProps)(HeaderComponent);
