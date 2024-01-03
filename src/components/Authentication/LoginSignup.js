import React, { useState, useRef } from "react";
import Header from "../UI/Navigation/Header";
import LoginSignupForm from "../UI/Forms/LoginSignupForm";

import { checkAuthFormValidation } from "../../utils/authFormValidation";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebase";

import { BG_URL } from "../../utils/constants";

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
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          // })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="background_image" />
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
