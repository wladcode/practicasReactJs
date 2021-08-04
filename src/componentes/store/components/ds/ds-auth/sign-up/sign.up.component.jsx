import React, { Component } from "react";
import "./sign-up.scss";

import { auth, createUserProfileDocument } from "../firebase.utils";
import { Grid } from "@material-ui/core";
import DSFormInputComponent from "../../ds-input/ds-input.component";
import DSButtonComponent from "../../ds-button/ds-button.component";
class SignUpComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { fullname, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("El password no coincide");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { fullname });

      this.setState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("ERROR EN LA CREAICON: ", error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { fullname, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <div className="title">
          <h2>No tengo una cuenta</h2>
          <span>Registrate con tu email y clave</span>
        </div>

        <form className="content" onSubmit={this.handleSubmit}>
          <Grid container spacing={2}>
            <DSFormInputComponent
              name="fullname"
              value={fullname}
              required
              handleChange={this.handleChange}
              label="Nombre"
            />
            <DSFormInputComponent
              name="email"
              value={email}
              required
              handleChange={this.handleChange}
              label="Email"
            />

            <DSFormInputComponent
              name="password"
              value={password}
              required
              handleChange={this.handleChange}
              label="Password"
            />

            <DSFormInputComponent
              name="confirmPassword"
              value={confirmPassword}
              required
              handleChange={this.handleChange}
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
}

export default SignUpComponent;
