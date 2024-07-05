"use client";

import React, { Fragment } from "react";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header/Header";
import styles from "./AmforaPage.module.css";

const AmforaPage = () => {

  return (
    <div className={styles.body}>
        <Fragment>
              <div>
                  <Header />
                  <article>
                      Testing Amfora
                  </article>
              </div>
              <Footer />
        </Fragment>
    </div>
  );
};
export default AmforaPage;