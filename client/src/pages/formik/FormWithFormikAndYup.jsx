import { Grid } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import facebookIcon from "../../assets/icons/facebook_icon.svg";
import googleIcon from "../../assets/icons/google_icon.svg";
import twitterIcon from "../../assets/icons/twitter_icon.svg";
import DSButtonComponent from "../../componentes/store/components/ds/ds-button/ds-button.component";
import DSFormInputFormikComponent from "../../componentes/store/components/ds/ds-input/ds-input-formik.component";
import "./scss/sign-in.scss";

import { SingInContainer } from "./scss/sign-in.styled";

function FormWithFormikAndYup() {
    const intialValues = { email: "", password: "" };

    const handleSubmit = (values) => {
        console.log(`in submit ...${JSON.stringify(values)}`);
    };

    const signInSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required"),

        password: Yup.string()
            .required("Password is required")
            .min(4, "Password is too short - should be 4 chars minimum")
            .max(6, "Password is too large - should be 6 chars maximun"),
    });

    return (
        <SingInContainer>
            <div className="title">
                <h2>Validaciones con Formik and YUP</h2>
                <div>
                    <p>
                        <span>Ingresa con tu email y clave</span>
                    </p>
                </div>
            </div>

            <Formik initialValues={intialValues} validationSchema={signInSchema} onSubmit={handleSubmit}>
                {(formik) => {
                    const { handleChange, errors, isValid, dirty } = formik;

                    console.log("ERRORES: " + JSON.stringify(errors));

                    return (
                        <Form className="sign-in" onSubmit={handleSubmit}>
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
                                    <img src={googleIcon} style={{ width: 32 }} alt="Login con Google" />
                                </DSButtonComponent>

                                <DSButtonComponent
                                    type="submit"
                                    isSocial
                                    className={!(dirty && isValid) ? "disabled-btn" : ""}
                                    disabled={!(dirty && isValid)}
                                >
                                    <img src={facebookIcon} style={{ width: 32 }} alt="Login con Facebook" />
                                </DSButtonComponent>

                                <DSButtonComponent
                                    type="submit"
                                    isSocial
                                    className={!(dirty && isValid) ? "disabled-btn" : ""}
                                    disabled={!(dirty && isValid)}
                                >
                                    <img src={twitterIcon} style={{ width: 32 }} alt="Login con Twitter" />
                                </DSButtonComponent>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </SingInContainer>
    );
}

export default FormWithFormikAndYup;
