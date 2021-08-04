import React from "react";
import "./singin-singup.scss";
import SignUpComponent from "./../../components/ds/ds-auth/sign-up/sign.up.component";
import SignInComponent from "../../components/ds/ds-auth/sign-in/sign-in.component";
const SingUnSingUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignInComponent />

      <SignUpComponent />
    </div>
  );
};

export default SingUnSingUpPage;
