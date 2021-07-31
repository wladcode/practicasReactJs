import React from "react";
import "./button.scss";

const DSButtonComponent = ({ children, ...otherProps }) => {
  return <button className="custom-button" {...otherProps}>
      {children}
  </button>;
};

export default DSButtonComponent;
