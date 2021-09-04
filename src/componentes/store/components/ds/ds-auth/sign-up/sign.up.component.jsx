import { Grid } from "@material-ui/core";
import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { userSignUpStart } from "../../../../../../redux/user/user.actions";
import DSButtonComponent from "../../ds-button/ds-button.component";
import DSFormInputComponent from "../../ds-input/ds-input.component";
import "./sign-up.scss";

function SignUpComponent({ signUp }) {
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { fullname, email, password, confirmPassword } = userData;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("El password no coincide");
      return;
    }

    signUp({ fullname, email, password });

    setUserData({
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="sign-up">
      <div className="title">
        <h2>No tengo una cuenta</h2>
        <span>Registrate con tu email y clave</span>
      </div>

      <form className="content" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <DSFormInputComponent
            name="fullname"
            value={fullname}
            required
            handleChange={handleChange}
            label="Nombre"
          />
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

          <DSFormInputComponent
            name="confirmPassword"
            value={confirmPassword}
            required
            handleChange={handleChange}
            label="Confirme la password"
          />
        </Grid>

        <div className="buttons">
          <DSButtonComponent type="submit">Registrarse</DSButtonComponent>
        </div>
      </form>
    </div>
  );
}

const mapDispathToProps = (dispath) => {
  return {
    signUp: (credentials) => dispath(userSignUpStart(credentials)),
  };
};

export default connect(null, mapDispathToProps)(SignUpComponent);
