"use client";

import React, { Fragment } from "react";
import Header from "@/components/UI/Header/HomeHeader";
import Footer from "@/components/UI/HomeFooter";
import styles from "./HomePage.module.css";

const HomePage = () => {

  return (
    <div className={styles.body}>
          <Header/>
        <div className={styles.article}>
          <p className={styles.title}>
            IOTA
          </p>
          <p className={styles.subtitle}>
            SMART OLIVE OIL
          </p>
          <p className={styles.mainText}>
            YOUR CONVENIENCE
          </p>
          <p className={styles.underMain}>
            OUR PRODUCT
          </p>
          <button> ABOUT US </button>
        </div>
          <Footer/>
      </div> 
  );
};
export default HomePage;