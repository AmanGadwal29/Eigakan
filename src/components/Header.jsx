import React from "react";
import styles from "../styles/Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();
  const signInClickHandle = () => {
    Navigate("/login");
  };
  return (
    <header>
      <nav className={styles.navSection}>
        <h1 class={styles.appName}> Eigakan</h1>

        <div className={styles.btnSection}>
          <div class="dropdown l ">
            <button
              className={
                "btn btn-secondary dropdown-toggle " + styles.languageBtn
              }
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              Language
            </button>
            <ul class="dropdown-menu">
              <li>English</li>
              <li>Hindi</li>
            </ul>
          </div>
          <button onClick={signInClickHandle} className={styles.SignInBtn}>
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
