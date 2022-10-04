import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import facebookIcon from "./../../../../../../assets/icons/facebook_icon.svg";
import googleIcon from "./../../../../../../assets/icons/google_icon.svg";
import twitterIcon from "./../../../../../../assets/icons/twitter_icon.svg";
import DSButtonComponent from "./../../ds-button/ds-button.component";
import DSFormInputComponent from "./../../ds-input/ds-input.component";
import { auth, signInWithGoogle } from "./../firebase.utils";
import "./sign-in.scss";

import { SingInContainer } from "./sign-in.styled";

function SignInComponent() {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });


  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setUserCredentials({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SingInContainer>
      <div className="title">
        <h2>Tengo una cuenta</h2>
        <span>Ingresa con tu email y clave</span>
      </div>

      <form className="content" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <DSFormInputComponent
            name="email"
            value={email}
            required
            handleChange={handleChange}
            label="Email"
          />

          <DSFormInputComponent
            name="password"
            value={password}
            required
            handleChange={handleChange}
            label="Password"
          />
        </Grid>

        <div className="buttons">
          <DSButtonComponent type="submit">Ingresar</DSButtonComponent>
        </div>

        <div className="text-divider">o</div>

        <div className="buttons-sn">
          <DSButtonComponent
            type="button"
            onClick={signInWithGoogle}
            isSocial
          >
            <img
              src={googleIcon}
              style={{ width: 32 }}
              alt="Login con Google"
            />
          </DSButtonComponent>

          <DSButtonComponent
            type="button"
            onClick={signInWithGoogle}
            isSocial
          >
            <img
              src={facebookIcon}
              style={{ width: 32 }}
              alt="Login con Facebook"
            />
          </DSButtonComponent>

          <DSButtonComponent
            type="button"
            onClick={signInWithGoogle}
            isSocial
          >
            <img
              src={twitterIcon}
              style={{ width: 32 }}
              alt="Login con Twitter"
            />
          </DSButtonComponent>
        </div>
      </form>
    </SingInContainer>
  );
}

export default SignInComponent;
