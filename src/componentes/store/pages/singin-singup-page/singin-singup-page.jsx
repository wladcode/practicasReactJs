import React from "react";
import SignInComponent from "../auth/sign-in.component";
import "./singin-singup.scss";
const SingUnSingUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <div>
          <SignInComponent />
      </div>
    </div>
  );
};

export default SingUnSingUpPage;
