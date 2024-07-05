"use client";

import React, { Fragment, useState } from "react";
import WelcomeCard from "@/components/Home/WelcomeCard";
import Footer from "@/components/UI/Footer";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
      <HomeFontContextProvider>
        {showIntro ? (
          <WelcomeCard setShowIntro={setShowIntro} />
        ) : (
          <Fragment>
            <Footer />
          </Fragment>
        )}
      </HomeFontContextProvider>
  );
};
export default HomePage;