import React, { Component } from "react";
import "./header.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../../../assets/crown.svg";
import { selectHiddenPanel } from "../../../../redux/char/cart-selectors";
import { selectCurrentUser } from "../../../../redux/user/user-selectors";
import { userLogOutStart } from "../../../../redux/user/user.actions";
import CartDropDownComponent from "../shop/cart-drop-down/cart-dropdown.component";
import CartIconComponent from "./../shop/shop-icon/shop-icon.component";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./header.styled";

const HeaderComponent = ({ currentUser, cartHidden, dispatch }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/shop">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        {currentUser ? (
          <>
            User: {currentUser.name}
            <OptionLink to="/shop/store">STORE</OptionLink>
            <OptionLink to="/shop">CONTACT</OptionLink>
            <OptionLink as="div" onClick={() => dispatch(userLogOutStart())}>
              SALIR
            </OptionLink>
            <CartIconComponent />
          </>
        ) : (
          <OptionLink to="/shop/signin">SING IN</OptionLink>
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
/*
SI NO SE SETEA, se pasa la funcion dispatch como propiedad en el componente
const mapDispatchToProps = (dispatch) => {
  return {
    userLogOutStart: () => dispatch(userLogOutStart()),
  };
};
*/

export default connect(mapStateToProps)(HeaderComponent);
