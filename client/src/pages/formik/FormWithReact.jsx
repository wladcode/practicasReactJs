import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import facebookIcon from "../../assets/icons/facebook_icon.svg";
import googleIcon from "../../assets/icons/google_icon.svg";
import twitterIcon from "../../assets/icons/twitter_icon.svg";
import DSButtonComponent from "../../componentes/store/components/ds/ds-button/ds-button.component";
import DSFormInputComponent from "../../componentes/store/components/ds/ds-input/ds-input.component";
import "./scss/sign-in.scss";

import { SingInContainer } from "./scss/sign-in.styled";

function FormWithReact() {
  const intialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`in submit ...${JSON.stringify(formValues)}`);
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
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

  const { email, password } = formValues;

  useEffect(() => {
    const signInWithGoogle = () => {
      console.log(`signInWith google ...${JSON.stringify(formValues)}`);
    };

    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      signInWithGoogle();
    }
  }, [formErrors, isSubmitting, formValues]);

  return (
    <SingInContainer>
      <div className="title">
        <h2>Validaciones con React</h2>
        <div>
          <p>
            <span>Ingresa con tu email y clave</span>
          </p>
        </div>
      </div>

      <form className="sign-in" onSubmit={handleSubmit} noValidate>
        {Object.keys(formErrors).length === 0 && isSubmitting && (
          <p>
            <span className="success-msg">Form submitted successfully</span>
          </p>
        )}
        <Grid container spacing={2}>
          <DSFormInputComponent
            name="email"
            value={email}
            required
            handleChange={handleChange}
            label="Email"
            error={formErrors.email === undefined ? false : true}
            helperText={formErrors.email === "" ? "" : formErrors.email}
          />

          <DSFormInputComponent
            name="password"
            value={password}
            required
            handleChange={handleChange}
            label="Password"
            error={formErrors.password === undefined ? false : true}
            helperText={formErrors.password === "" ? "" : formErrors.password}
          />
        </Grid>

        <div className="buttons">
          <DSButtonComponent type="submit">Ingresar</DSButtonComponent>
        </div>

        <div className="text-divider">o</div>

        <div className="buttons-sn">
          <DSButtonComponent type="submit" isSocial>
            <img
              src={googleIcon}
              style={{ width: 32 }}
              alt="Login con Google"
            />
          </DSButtonComponent>

          <DSButtonComponent type="submit" isSocial>
            <img
              src={facebookIcon}
              style={{ width: 32 }}
              alt="Login con Facebook"
            />
          </DSButtonComponent>

          <DSButtonComponent type="submit" isSocial>
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

export default FormWithReact;
