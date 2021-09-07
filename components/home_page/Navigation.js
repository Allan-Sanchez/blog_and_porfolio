import React, { useState } from "react";
import styles from "../../styles/navbar.module.css";
import SvgHamburger from "../svg/SvgHamburger";
import SvgClose from "../svg/SvgClose";
export default function Navigation() {
  const [navbarMovil, setNavbarMovil] = useState(false);

  return (
    <>
      <nav className={styles.navBar}>
        <h2 className={styles.navBarLogo}>Allan Sanchez</h2>
        <ul className={styles.navBarContainer}>
          <li className={styles.active}>
            <a href="#heroPage">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <div className={styles.marker}></div>
        </ul>
        <div
          className={styles.iconHamburgerContainer}
          onClick={() => setNavbarMovil(true)}
        >
          <SvgHamburger className={styles.iconHamburger} />
        </div>
      </nav>

      {navbarMovil ? (
        <div className={styles.navBarMenuMovil}>
          <div onClick={() => setNavbarMovil(false)}>
            <SvgClose className={styles.iconClose} />
          </div>
          <ul className={styles.navBarContainerMovil}>
            <li className={styles.activeMovail}>
              <a
                href="#heroPage"
                data-text="Home"
                onClick={() => setNavbarMovil(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                data-text="About"
                onClick={() => setNavbarMovil(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                data-text="Projects"
                onClick={() => setNavbarMovil(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                data-text="Contact"
                onClick={() => setNavbarMovil(false)}
              >
                Contact
              </a>
            </li>
            <div className={styles.markerMovial}></div>
          </ul>
        </div>
      ) : null}
    </>
  );
}
