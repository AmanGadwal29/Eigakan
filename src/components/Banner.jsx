import React from "react";
import styles from "../styles/Banner.module.css";

import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

//FOR AUTHENTICATION FOR REGISTERATION
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./FirebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const banner = () => {
  //REGISTRATION
  initializeApp(firebaseConfig);
  const auth = getAuth();
  const Navigate = useNavigate();

  //ALL STATES
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidEmailMsg, setInValidEmailMsg] = useState("");
  const [isValidPasswordMsg, setIsValidPasswordMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  //FOR VALIDATION CHECKING
  const validation = (fieldname, value) => {
    switch (fieldname) {
      case "email":
        return value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      case "password":
        return value.length >= 6;
      default:
        break;
    }
  };

  const emailElement = useRef(null);
  const passwordElement = useRef(null);

  const handleGetStarted = (e) => {
    e.preventDefault();

    const email = emailElement.current.value;
    const password = passwordElement.current.value;

    if (!validation("email", email) || !validation("password", password)) {
      setIsValidEmail(validation("email", email));
      setIsValidPassword(validation("password", password));

      // Update error messages if email or password is invalid
      if (!validation("email", email)) {
        setInValidEmailMsg("Please enter a valid email address");
      } else {
        setInValidEmailMsg(""); // Reset error message if email is valid
      }

      if (!validation("password", password)) {
        setIsValidPasswordMsg("Password should be at least 6 characters long");
      } else {
        setIsValidPasswordMsg(""); // Reset error message if password is valid
      }
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          if (auth) {
            Navigate("/dashboard");
          }
        })
        .catch((error) => {
          setErrorMsg("Opps! Somthing went wrong. Try again");
        });
    }
    emailElement.current.value = "";
    passwordElement.current.value = "";
  };

  return (
    <div className={styles.bannerContainer}>
      <h1 className={styles.salogan}>
        Laughter. Tears. Thrills. Find it all on Eigakan.
      </h1>
      <p className={styles.info1}>Endless entertainment start anytime.</p>
      <p className={styles.info2}>
        Ready to watch? Enter your email to create your account.
      </p>
      <div className={styles.detailSec}>
        <div className={styles.emailAndPassword}>
          <input
            onClick={() => {
              setErrorMsg(""),
                setInValidEmailMsg(""),
                setIsValidPasswordMsg("");
            }}
            ref={emailElement}
            className={styles.emailSec}
            type="email"
            placeholder="Enter your email"
            name=""
            id=""
          />
          <input
            onClick={() => {
              setErrorMsg(""),
                setInValidEmailMsg(""),
                setIsValidPasswordMsg("");
            }}
            ref={passwordElement}
            className={styles.pswrdSec}
            type="password"
            name=""
            id=""
            placeholder="Create your password"
          />
        </div>

        <button onClick={handleGetStarted} className={styles.getStartBtn}>
          Get Started {">"}{" "}
        </button>
      </div>
      <div className={styles.errorMsg}>{errorMsg && errorMsg}</div>
      {!isValidEmail && <p className={styles.inValid}> {isValidEmailMsg} </p>}
      {!isValidPassword && (
        <p className={styles.inValid}> {isValidPasswordMsg}</p>
      )}
    </div>
  );
};

export default banner;
