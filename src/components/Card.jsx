import React from "react";
import styles from "../styles/Card.module.css";
import { IoStar } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Card = ({ data, handleClose }) => {
  return (
    <>
      {data != [] && (
        <div className={styles.whole}>
          <div className={styles.cardBody}>
            <span
              onClick={() => handleClose()}
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill "
            >
              <IoMdCloseCircleOutline />
            </span>
            <div className={styles.imageBox}>
              <img
                src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                alt={data.title}
              />
              <div className={styles.buttons}>
                <button className={styles.playBtn}>Play</button>
                <button className={styles.myListBtn}>My List</button>
              </div>
            </div>
            <div className={styles.details}>
              <h1 className={styles.title}>{data.name}</h1>
              <p className={styles.overview}>{data.overview}</p>
              <p className={styles.rating}>
                {" "}
                <IoStar /> <div>{data.vote_average}</div>
                Rating
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
