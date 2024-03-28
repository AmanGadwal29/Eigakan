import React from "react";
import styles from "../styles/Login.module.css";
import { useNavigate } from "react-router-dom";

//LOGIN
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./FirebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";

const Login = () => {
  initializeApp(firebaseConfig);
  const Navigate = useNavigate();
  const auth = getAuth();

  const emailIdElement = useRef("");
  const passwordElement = useRef("");
  const [errorMsg, setErrorMsg] = useState("");

  //REDIRECT IN SING UP PAGE
  const signUphandle = () => {
    Navigate("/");
  };

  const isvalidEmail = true;
  const signInhandle = (e) => {
    e.preventDefault();
    const email = emailIdElement.current.value;
    const password = passwordElement.current.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User is signed in
        const user = userCredential.user;
        console.log("User signed in:", user);
        Navigate("/dashboard");
      })
      .catch((error) => {
        setErrorMsg("Invalid email or password. Please try again.");
        emailIdElement.current.value = "";
        passwordElement.current.value = "";
      });
  };
  return (
    <div className={styles.loginUI}>
      <form className={styles.loginForm}>
        <h1>Sign In</h1>

        <input
          onClick={() => {
            setErrorMsg("");
          }}
          type="email"
          class={styles.emailSection}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter your Email"
          ref={emailIdElement}
        />

        <input
          onClick={() => {
            setErrorMsg("");
          }}
          type="password"
          class={styles.passwordSection}
          id="exampleInputPassword1"
          placeholder={
            isvalidEmail ? "Enter your email" : "Please enter valid email"
          }
          ref={passwordElement}
        />

        <button onClick={signInhandle} class={styles.signInbtn}>
          Sign In
        </button>

        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label
            class={`form-check-label ${styles.checkBox}`}
            for="exampleCheck1"
          >
            remember me?
          </label>
        </div>
        <div className={styles.forSignUp}>
          <p>
            New to Eigakan?{" "}
            <button onClick={signUphandle} className={styles.signUpbtn}>
              Sign Up now
            </button>{" "}
          </p>
          <p className={styles.errorMsg}> {errorMsg !== "" && errorMsg} </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
