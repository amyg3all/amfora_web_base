"use client";

import React, { useState } from "react";
import Link from "next/link";
import MobileNavigation from "./MobileNavigation";
import styles from "./Header.module.css";

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleNavigation = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <header className={styles.header}>
      <Link className={styles.title} href="/">IOTA</Link>

      {/* Desktop Navigation */}
      <div>
        <nav className={styles.main}>
            <a><Link href={{pathname: '/home', query: {input:""},}}>HOME</Link></a> |
            <Link href="/amfora"> AMFORA </Link>|
            <Link href="/producers"> PRODUCERS </Link>|
            <Link href="/customers"> CUSTOMERS </Link>|
            <Link href="/delivery"> DELIVERY</Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <button onClick={handleNavigation} className={`${showMobileNav ? styles.open : ""} ${styles.hamburger}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {showMobileNav &&
      <MobileNavigation closeNav={handleNavigation} />}
    </header>
  );
};
export default Header;
