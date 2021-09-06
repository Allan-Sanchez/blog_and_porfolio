import React from "react";
import styles from "../../styles/navbar.module.css";
import SvgHamburger from "../svg/SvgHamburger";
export default function Navigation() {
  return (
    <nav className={styles.navBar}>
      <h2 className={styles.navBarLogo}>Allan Sanchez</h2>
      <ul className={styles.navBarContainer}>
        <li className={styles.active}>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <div className={styles.marker}></div>
      </ul>
      <SvgHamburger className={styles.iconHamburger} />

      <div className={styles.navBarMenuMovil}></div>
    </nav>
  );
}
