import React, { Component } from "react";
import "./sign-in.scss";
import DSFormInputComponent from "./../../../commons/form-input/form-input.component";
import DSButtonComponent from "../../../commons/button/button.component";
import { signInWithGoogle } from "./../../../../ds-auth/firebase.utils";

class SignInComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2 className="title">Tengo una cuenta</h2>
        <span>Ingresa con tu email y clave</span>
        <form onSubmit={this.handleSubmit}>
          <DSFormInputComponent
            name="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="Email"
          />

          <DSFormInputComponent
            name="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="Password"
          />

          <div className="buttons">
            <DSButtonComponent type="submit">Ingresar</DSButtonComponent>
            <DSButtonComponent onClick={signInWithGoogle} isGoogleSignIn>
              Ingresar con Google
            </DSButtonComponent>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInComponent;
