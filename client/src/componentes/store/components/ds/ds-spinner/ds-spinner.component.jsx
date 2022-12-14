import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./ds-sppinner.styled";

const DSSnipper =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer></SpinnerContainer>
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

export default DSSnipper;
