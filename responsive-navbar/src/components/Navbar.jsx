import React, { useState } from "react";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <a className={styles.navlogo}>[BrandLogo]</a>
          <ul className={styles.navmenu}>
            <li className={styles.navitem}>
              <a className={styles.navlink}>Home</a>
            </li>
            <li className={styles.navitem}>
              <a className={styles.navlink}>About</a>
            </li>
            <li className={styles.navitem}>
              <a className={styles.navlink}>Contact</a>
            </li>
          </ul>
          <button className={styles.hamburger}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>
    </>
  );
}
