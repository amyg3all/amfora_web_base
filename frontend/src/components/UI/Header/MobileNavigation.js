import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faUniversalAccess, faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "@/components/store/ThemeContextProvider";

import styles from "./MobileNavigation.module.css";

const MobileNavigation = ({ closeNav }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleSwitchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={styles.panel}>
      <nav >
        <Link onClick={closeNav} href="/search">Search</Link>
        <Link onClick={closeNav} href={{pathname: '/gallery', query: {input:""},}}>Gallery</Link>
        <Link onClick={closeNav} href="/map">Maps</Link>
        <Link onClick={closeNav} href="/timeline">Timeline</Link>
        <Link onClick={closeNav} href="/cladogram">Cladogram</Link>
      </nav>
    </div>
  );
};
export default MobileNavigation;
