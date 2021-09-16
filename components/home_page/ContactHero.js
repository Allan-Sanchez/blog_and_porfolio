import React from "react";
import styles from "../../styles/contactHero.module.css";
import Email from "../svg/email";

export default function ContactHero() {
  return (
    <div id="contact" className={styles.contactHeroContainer}>
      <h3 className={styles.contactHeroTitle}> Interested working with me?</h3>
      <div className={styles.contactHeroIconContainer}>
        <Email className={styles.contactHeroSvg} />
        <a href="#">Email Me</a>
      </div>
    </div>
  );
}
