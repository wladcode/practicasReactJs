import { Grid } from "@material-ui/core";
import React from "react";
import facebookIcon from "../../assets/icons/facebook_icon.svg";
import googleIcon from "../../assets/icons/google_icon.svg";
import twitterIcon from "../../assets/icons/twitter_icon.svg";
import DSButtonComponent from "../../componentes/store/components/ds/ds-button/ds-button.component";
import DSFormInputComponent from "../../componentes/store/components/ds/ds-input/ds-input.component";
import "./scss/sign-in.scss";

import { Formik } from "formik";

import { SingInContainer } from "./scss/sign-in.styled";

function FormWithFormik() {
  const intialValues = { email: "", password: "" };

  const handleSubmit = (values) => {
    console.log(`in submit ...${JSON.stringify(values)}`);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }

    console.log("ERRORES: ", errors);

    return errors;
  };

  return (
    <SingInContainer>
      <div className="title">
        <h2>Validaciones con Formik</h2>
        <div>
          <p>
            <span>Ingresa con tu email y clave</span>
          </p>
        </div>
      </div>

      <Formik
        initialValues={intialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
            isValid,
            dirty,
          } = formik;

          return (
            <form className="sign-in" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <DSFormInputComponent
                  name="email"
                  value={values.email}
                  required
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  label="Email"
                  error={errors.email && touched.email ? true : false}
                  helperText={errors.email && touched.email ? errors.email : ""}
                />

                <DSFormInputComponent
                  name="password"
                  value={values.password}
                  required
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  label="Password"
                  error={errors.password && touched.password ? true : false}
                  helperText={
                    errors.password && touched.password ? errors.password : ""
                  }
                />
              </Grid>

              <div className="buttons">
                <DSButtonComponent
                  type="submit"
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                  disabled={!(dirty && isValid)}
                >
                  Ingresar
                </DSButtonComponent>
              </div>

              <div className="text-divider">o</div>

              <div className="buttons-sn">
                <DSButtonComponent
                  type="submit"
                  isSocial
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
                  isSocial
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
                  isSocial
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
            </form>
          );
        }}
      </Formik>
    </SingInContainer>
  );
}

export default FormWithFormik;
