import React from "react";
import styles from "./HomeFooter.module.css";

const Footer = () => {
  return (
    <footer className={`${styles["footer"]}`}>
      <p className={styles["line-with-text"]}>
        <div className={styles["line"]}></div>
        <div className={styles["circle-text"]}>
            <span className={styles["text"]}>EXPLORE</span> 
        </div>
        <div className={styles["line"]}></div>
      </p>
    </footer>
  );
};
export default Footer;