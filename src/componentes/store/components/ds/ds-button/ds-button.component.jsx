import React from "react";
import "./ds-button.scss";

const DSButtonComponent = ({ children, socialSignIn, ...otherProps }) => {
  return <button className={`${socialSignIn ? "social-sign-in" : ""} custom-button`} {...otherProps}>
      {children}
  </button>;
};

export default DSButtonComponent;
