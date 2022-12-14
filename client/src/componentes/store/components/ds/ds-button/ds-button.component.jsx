import React from "react";
import "./ds-button.scss";
import { CustomeButtomContainer } from "./ds-buttom.styled";

const DSButtonComponent = ({ children, ...otherProps }) => {
    console.log("otherProps ", otherProps);
    return <CustomeButtomContainer {...otherProps}>{children}</CustomeButtomContainer>;
};

export default DSButtonComponent;
