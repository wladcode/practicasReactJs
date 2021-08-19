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
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from "./header.styled";

const HeaderComponent = ({ currentUser, cartHidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/shop">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        {currentUser ? (
          <>
            User: {currentUser.name}
            <OptionLink to="/shop/store">
              STORE
            </OptionLink>
            <OptionLink to="/shop">
              CONTACT
            </OptionLink>
            <OptionLink as="div" onClick={() => auth.signOut()}>
              SALIR
            </OptionLink>
            <CartIconComponent />
          </>
        ) : (
          <OptionLink to="/shop/signin">
            SING IN
          </OptionLink>
        )}
      </OptionsContainer>

      {cartHidden ? null : <CartDropDownComponent />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectHiddenPanel,
});

export default connect(mapStateToProps)(HeaderComponent);
