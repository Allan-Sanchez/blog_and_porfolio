import React from "react";
import styles from "../../styles/footer.module.css";
import LogoGithub from "../svg/logo-github";
import LogoLinkedin from "../svg/logo-linkedin";
import LogoYoutube from "../svg/logo-youtube";
import ArrowUp from "../svg/ArrowUp";
export default function Footer() {
  return (
    <footer className={styles.footerMain}>
      <h4 className={styles.footerTitle}>Let&apos;s Connect</h4>
      <div className={styles.footerIcons}>
        <a href="https://github.com/Allan-Sanchez" target="_blank" rel="noopener noreferrer">
          <LogoGithub />
        </a>
        <a
          href="https://www.youtube.com/channel/UCculhVTh_BAt-eFbDf5M1aQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoLinkedin />
        </a>

        <a href="https://www.linkedin.com/in/allan-sanchez-884607128/" target="_blank" rel="noopener noreferrer">

        <LogoYoutube />
        </a>
      </div>
      <div className={styles.footerButtonUp}>
        <a href="#heroPage">
          <h5>Back to Top</h5>
          <ArrowUp />
        </a>
      </div>
    </footer>
  );
}
