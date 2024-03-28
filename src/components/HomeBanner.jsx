import React from "react";
import styles from "../styles/HomeBanner.module.css";
import { IoSearch } from "react-icons/io5";

const HomeBanner = () => {
  return (
    <div className={styles.bannerSection}>
      <img
        className={styles.bannerImage}
        src="../../public/Images/bannerPic.jpg"
        alt=""
      />
      <div className={styles.topBar}>
        <h1 className={styles.eigakan}> Eigakan</h1>
        {/* <h3 className={styles.welcomeMsg}>
          Welcome to Eikagan, your premier online cinema for limitless movie
          entertainment!
        </h3> */}
        <div class="input-group rounded searchBar">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span class="input-group-text border-0 searchIcon" id="search-addon">
            <IoSearch />
          </span>
        </div>
      </div>
      <div className={styles.bannerContent}>
        <h1 className={styles.bannerTitle}> Spiderman : No way home </h1>
        <div className={styles.bannerButtons}>
          <button className={`${styles.bannerButton} ${styles.playButton}`}>
            Play
          </button>
          <button className={`${styles.bannerButton} ${styles.myListButton}`}>
            My list
          </button>
        </div>
        <p className={styles.bannerDiscription}>
          Peter Parker's secret identity is revealed to the entire world.
          Desperate for help, Peter turns to Doctor Strange to make the world
          forget that he is Spider-Man. The spell goes horribly wrong and
          shatters the multiverse, bringing in monstrous villains that could
          destroy the world. The Multiverse Unleashed.
        </p>
      </div>

      <div className={styles.bottomBannerLine}></div>
    </div>
  );
};

export default HomeBanner;
