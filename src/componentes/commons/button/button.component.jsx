import React from "react";
import "./button.scss";

const DSButtonComponent = ({ children, isGoogleSignIn, ...otherProps }) => {
  return <button className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherProps}>
      {children}
  </button>;
};

export default DSButtonComponent;
