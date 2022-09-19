import { Grid } from "@material-ui/core";
import { Field, Form, withFormik } from "formik";
import React, { Component } from "react";
import * as Yup from "yup";
import facebookIcon from "../../assets/icons/facebook_icon.svg";
import googleIcon from "../../assets/icons/google_icon.svg";
import twitterIcon from "../../assets/icons/twitter_icon.svg";
import DSButtonComponent from "../../componentes/store/components/ds/ds-button/ds-button.component";
import DSFormInputFormikComponent from "../../componentes/store/components/ds/ds-input/ds-input-formik.component";
import "./scss/sign-in.scss";

import { SingInContainer } from "./scss/sign-in.styled";

class FormWithFormikAndYupHOC extends Component {
  render() {
    const { isSubmitting, handleChange, isValid, dirty } = this.props;

    return (
      <SingInContainer>
        <div className="title">
          <h2>Validaciones con Formik and YUP -- HCO </h2>
          <div>
            <p>
              <span>Ingresa con tu email y clave</span>
            </p>
          </div>
        </div>
        <Form className="sign-in" noValidate>
          <Grid container spacing={2}>
            <Field
              id="email"
              name="email"
              type="email"
              label="Email"
              component={DSFormInputFormikComponent}
              handleChange={handleChange}
            />

            <Field
              id="password"
              name="password"
              type="password"
              label="Password"
              component={DSFormInputFormikComponent}
              handleChange={handleChange}
            />
          </Grid>

          <div className="buttons">
            <DSButtonComponent type="submit" isSubmitting>
              Ingresar
            </DSButtonComponent>
          </div>

          <div className="text-divider">o</div>

          <div className="buttons-sn">
            <DSButtonComponent
              type="submit"
              socialSignIn
              className={!(dirty && isValid) ? "disabled-btn" : ""}
              disabled={!(dirty && isValid)}
            >
              <img
                src={googleIcon}
                style={{ width: 32 }}
                alt="Login con Google"
              />
            </DSButtonComponent>

            <DSButtonComponent
              type="submit"
              socialSignIn
              className={!(dirty && isValid) ? "disabled-btn" : ""}
              disabled={!(dirty && isValid)}
            >
              <img
                src={facebookIcon}
                style={{ width: 32 }}
                alt="Login con Facebook"
              />
            </DSButtonComponent>

            <DSButtonComponent
              type="submit"
              socialSignIn
              className={!(dirty && isValid) ? "disabled-btn" : ""}
              disabled={!(dirty && isValid)}
            >
              <img
                src={twitterIcon}
                style={{ width: 32 }}
                alt="Login con Twitter"
              />
            </DSButtonComponent>
          </div>
        </Form>
      </SingInContainer>
    );
  }
}

export default withFormik({
  enableReinitialize: true,
  validateOnChange: false,
  validateOnBlur: false,
  mapPropsToValues: (props) => ({
    email: "",
    password: "",
  }),
  validationSchema: () =>
    Yup.object().shape({
      email: Yup.string().email().required("Email is required"),

      password: Yup.string()
        .required("Password is required")
        .min(4, "Password is too short - should be 4 chars minimum")
        .max(6, "Password is too large - should be 6 chars maximun"),
    }),
  handleSubmit: () => {
    console.log("SUBMITTS");
  },
})(FormWithFormikAndYupHOC);
