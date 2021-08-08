import React from "react";
import "./ds-button.scss";

const DSButtonComponent = ({ children, socialSignIn,inverted, ...otherProps }) => {
  return <button className={`${inverted ? "inverted" : ""} ${socialSignIn ? "social-sign-in" : ""} custom-button`} {...otherProps}>
      {children}
  </button>;
};

export default DSButtonComponent;
