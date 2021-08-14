import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.scss";

import { ReactComponent as Logo } from "../../../../assets/crown.svg";
import { auth } from "./../ds/ds-auth/firebase.utils";
import { connect } from "react-redux";
import CartDropDownComponent from "../shop/cart-drop-down/cart-dropdown.component";
import CartIconComponent from "./../shop/shop-icon/shop-icon.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../../../redux/user/user-selectors";
import { selectHiddenPanel } from "../../../../redux/char/cart-selectors";

const HeaderComponent = ({ currentUser, cartHidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/shop">
        <Logo className="logo" />
      </Link>
      <div className="options">
        {currentUser ? (
          <>
            User: {currentUser.name}
            <Link className="option" to="/shop/store">
              STORE
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
          <Link className="option" to="/shop/signin">
            SING IN
          </Link>
        )}
      </div>

      {cartHidden ? null : <CartDropDownComponent />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectHiddenPanel,
});

export default connect(mapStateToProps)(HeaderComponent);
