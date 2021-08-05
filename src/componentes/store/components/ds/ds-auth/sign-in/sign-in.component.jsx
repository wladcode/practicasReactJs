import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import { auth, signInWithGoogle } from "./../firebase.utils";
import facebookIcon from "./../../../../../../assets/icons/facebook_icon.svg";
import googleIcon from "./../../../../../../assets/icons/google_icon.svg";
import twitterIcon from "./../../../../../../assets/icons/twitter_icon.svg";
import "./sign-in.scss";
import DSFormInputComponent from "./../../ds-input/ds-input.component";
import DSButtonComponent from "./../../ds-button/ds-button.component";

class SignInComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log("ERROR: ", error);
    }
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

          <div className="text-divider">o</div>

          <div className="buttons-sn">
            <DSButtonComponent type="button" onClick={signInWithGoogle} socialSignIn>
              <img
                src={googleIcon}
                style={{ width: 32 }}
                alt="Login con Google"
              />
            </DSButtonComponent>

            <DSButtonComponent type="button" onClick={signInWithGoogle} socialSignIn>
              <img
                src={facebookIcon}
                style={{ width: 32 }}
                alt="Login con Facebook"
              />
            </DSButtonComponent>

            <DSButtonComponent type="button" onClick={signInWithGoogle} socialSignIn>
              <img
                src={twitterIcon}
                style={{ width: 32 }}
                alt="Login con Twitter"
              />
            </DSButtonComponent>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInComponent;
