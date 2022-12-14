import { Button } from "@material-ui/core";
import styled, { css } from "styled-components";

const HoverButtonsStyles = css`
    background-color: white;
    color: black;
    border: 1px solid silver;
`;

const NormalButtonsStyles = css`
    background-color: #4285f4;
    color: white;
    border: none;

    &:hover {
        ${HoverButtonsStyles}
    }
`;

const SocialSignInStyles = css`
    min-width: 70px;
    background-color: white;
    border: 1px solid silver;
    padding: 0;
    &:hover {
        background-color: silver;
        border: none;
    }
`;

const InvertedStyles = css`
    ${HoverButtonsStyles}

    &:hover {
        background-color: #4285f4;
        color: white;
        border: none;
    }
`;

const disableButtonStyles = css`
    cursor: not-allowed;
`;

const getButtonStyles = (props) => {
    console.log("props in styled ", props);
    if (props.isSocial) {
        return SocialSignInStyles;
    }

    return props.inverted ? InvertedStyles : NormalButtonsStyles;
};

export const CustomeButtomContainer = styled(Button)`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    //line-height: 5px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: "Open Sans Condensed";
    font-weight: bolder;
    cursor: pointer;
    border-radius: 4px;
    justify-content: center;
    ${getButtonStyles}
    ${(props) => props.disabled && disableButtonStyles}
`;
