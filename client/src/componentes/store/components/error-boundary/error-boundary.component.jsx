import React from "react";
import { Component } from "react";
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    //process the error
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log("ERROE EN LA APLCACION:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <ErrorImageOverlay>
            <ErrorImageContainer imageUrl="https://i.imgur.com/U3vTGjX.png" />
            <ErrorImageText>Error en la aplicacion</ErrorImageText>
          </ErrorImageOverlay>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
