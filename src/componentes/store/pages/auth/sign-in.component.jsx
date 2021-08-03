import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import DSButtonComponent from "../../../commons/button/button.component";
import { signInWithGoogle } from "./../../../../ds-auth/firebase.utils";
import facebookIcon from "./../../../../images/icons/facebook_icon.svg";
import googleIcon from "./../../../../images/icons/google_icon.svg";
import twitterIcon from "./../../../../images/icons/twitter_icon.svg";
import DSFormInputComponent from "./../../../commons/form-input/form-input.component";
import "./sign-in.scss";


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
        <div className="title">
          <h2>Tengo una cuenta</h2>
          <span>Ingresa con tu email y clave</span>
        </div>

        <form className="content" onSubmit={this.handleSubmit}>
          <Grid container spacing={2}>
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
          </Grid>

          <div className="buttons">
            <DSButtonComponent type="submit">Ingresar</DSButtonComponent>
          </div>

          <div class="text-divider">o</div>

          <div className="buttons-sn">
            <DSButtonComponent onClick={signInWithGoogle} socialSignIn>
              <img src={googleIcon} style={{ width: 32 }} alt="Login con Google"/>
            </DSButtonComponent>

            <DSButtonComponent onClick={signInWithGoogle} socialSignIn>
              <img src={facebookIcon} style={{ width: 32 }} alt="Login con Facebook"/>
            </DSButtonComponent>

            <DSButtonComponent onClick={signInWithGoogle} socialSignIn>
              <img src={twitterIcon} style={{ width: 32 }} alt="Login con Twitter"/>
            </DSButtonComponent>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInComponent;
