import React, { useState, useRef } from "react";
import Header from "../UI/Navigation/Header";
import LoginSignupForm from "../UI/Forms/LoginSignupForm";

import { checkAuthFormValidation } from "../../utils/authFormValidation";

const LoginSignup = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleSubmit = () => {
    const message = checkAuthFormValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    console.log(email);
    console.log(password);
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background_image"
        />
      </div>
      <LoginSignupForm
        isSignInForm={isSignInForm}
        toggleForm={toggleSignInForm}
        name={name}
        email={email}
        password={password}
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
      />
    </>
  );
};

export default LoginSignup;
