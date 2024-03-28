import React from "react";
import styles from "../styles/List.module.css";

import { useState, useEffect } from "react";
import { useRef } from "react";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import { fetchData } from "../api/Api_movies";

const List = ({ title, param, handleClickOpen, getDataForCard }) => {
  // FETCHING DATA AND STORED IT INTO LIST
  const [list, setList] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    fetchData(param, { signal })
      .then((response) => {
        setList(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    return () => {
      abortController.abort();
    };
  }, []);

  // FOR SCROLLING BUTTONS
  const postersRef = useRef(null);
  const scrollRight = () => {
    if (postersRef.current) {
      postersRef.current.scrollTo({
        left: postersRef.current.scrollLeft + 600, // Adjust scroll distance as needed
        behavior: "smooth", // Enable smooth scrolling
      });
    }
  };
  const scrollLeft = () => {
    if (postersRef.current) {
      postersRef.current.scrollTo({
        left: postersRef.current.scrollLeft - 600, // Adjust scroll distance as needed
        behavior: "smooth", // Enable smooth scrolling
      });
    }
  };

  return (
    <div className={styles.list}>
      <div className={styles.row}>
        <h2 className={styles.listTitle}>{title}</h2>
        <div className={styles.col}>
          <div ref={postersRef} className={styles.rowPosters}>
            <button onClick={scrollRight} className={styles.scrollRightBtn}>
              <FaArrowRight />
            </button>
            <button onClick={scrollLeft} className={styles.scrollLeftBtn}>
              <FaArrowLeft />
            </button>

            {list.map((oneMovie) => (
              <div className={styles.rowPoster}>
                <div key={oneMovie.id}>
                  <img
                    onClick={() => {
                      handleClickOpen();
                      getDataForCard(oneMovie);
                    }}
                    src={`https://image.tmdb.org/t/p/original/${oneMovie.poster_path}`}
                    alt={oneMovie.title}
                  />
                </div>
              </div>
            ))}

            {/* STATIC DATA */}
            {/* <div className={styles.rowPoster}>
              <div>
                <img src="../../public/Images/bannerPic.jpg" />
              </div>
            </div>
            <div className={styles.rowPoster}>
              <div>
                <img src="../../public/Images/bannerPic.jpg" />
              </div>
            </div>
            <div className={styles.rowPoster}>
              <div>
                <img src="../../public/Images/bannerPic.jpg" />
              </div>
            </div>
            <div className={styles.rowPoster}>
              <div>
                <img src="../../public/Images/bannerPic.jpg" />
              </div>
            </div>
            <div className={styles.rowPoster}>
              <div>
                <img src="../../public/Images/bannerPic.jpg" />
              </div>
            </div>
            <div className={styles.rowPoster}>
              <div>
                <img src="../../public/Images/bannerPic.jpg" />
              </div>
            </div>
            <div className={styles.rowPoster}>
              <div>
                <img src="../../public/Images/bannerPic.jpg" />
              </div>
            </div>
            <div className={styles.rowPoster}>
              <div>
                <img src="../../public/Images/bannerPic.jpg" />
              </div>
            </div>
            <div className={styles.rowPoster}>
              <div>
                <img src="../../public/Images/bannerPic.jpg" />
              </div>
            </div>
            <div className={styles.rowPoster}>
              <div>
                <img src="../../public/Images/bannerPic.jpg" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
