import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

import { ReactComponent as Logo } from "../../../../assets/crown.svg";
import { auth } from "./../ds/ds-auth/firebase.utils";
import { connect } from "react-redux";

const HeaderComponent = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/shopping">
        <Logo className="logo" />
      </Link>
      <div className="options">
        {currentUser ? (
          <>
            <Link className="option" to="/shop">
              SHOP
            </Link>
            <Link className="option" to="/shop">
              CONTACT
            </Link>
            <div className="option" onClick={() => auth.signOut()}>
              SALIR
            </div>
          </>
        ) : (
          <Link className="option" to="/signin">
            SING IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (userReducer) => ({
  currentUser: userReducer.user.currentUser,
});

export default connect(mapStateToProps)(HeaderComponent);
