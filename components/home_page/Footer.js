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
        <LogoGithub />
        <LogoLinkedin />
        <LogoYoutube />
      </div>
      <div className={styles.footerButtonUp}>
        <h5>Back to Top</h5>
        <ArrowUp/>
      </div>
    </footer>
  );
}
