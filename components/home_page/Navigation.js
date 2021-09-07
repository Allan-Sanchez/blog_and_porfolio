import React, { useState, useEffect } from "react";
import styles from "../../styles/navbar.module.css";
import SvgHamburger from "../svg/SvgHamburger";
import SvgClose from "../svg/SvgClose";
import HoverEffectNav from "./HoverEffectNav";
export default function Navigation() {
  const [navbarMovil, setNavbarMovil] = useState(false);
  const [heightScroll, setHeightScroll] = useState(0);
  const [widthWindow, setWidthWindow] = useState(0);

  useEffect(() => {
    window.onscroll = function () {
      setHeightScroll(window.scrollY);
      setWidthWindow(window.innerWidth);
    };
  }, []);
  return (
    <>
      <nav className={styles.navBar}>
        <h2 className={styles.navBarLogo}>Allan Sanchez</h2>
        <ul className={styles.navBarContainer}>
          <li className={`${heightScroll < 582 ? styles.active : null} `}>
            <a href="#heroPage">Home</a>
          </li>
          <li
            className={`${
              heightScroll > 582 && heightScroll < 1250 ? styles.active : ""
            }`}
          >
            <a href="#about">About</a>
          </li>
          <li
            className={`${
              heightScroll > 1250 && heightScroll < 2300 ? styles.active : ""
            }`}
          >
            <a href="#projects">Projects</a>
          </li>
          <li className={`${heightScroll > 2300 ? styles.active : ""}`}>
            <a href="#contact">Contact</a>
          </li>
          <HoverEffectNav height={heightScroll} />
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
