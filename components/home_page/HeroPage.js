import React from "react";
import Image from "next/image";
// icons
import LogoGithub from "../svg/logo-github";
import LogoLinkedin from "../svg/logo-linkedin";
import LogoYoutube from "../svg/logo-youtube";
import Line from "../svg/line";
import Email from "../svg/email";
import Download from "../svg/download";
import BulletPoints from "../svg/bulletPoints";

import styles from "../../styles/heroPage.module.css";
export default function HeroPage() {
  return (
    <div id="heroPage" className={styles.heroPage}>
      <div className={styles.heroColumn}>
        <h4>Hey!</h4>
        <h1>
          I&apos;m <span>Allan Sanchez </span>
          Full-Stack Developer
        </h1>

        <div className={styles.heroContainerLine}>
          <Line />
        </div>

        {/* description */}
        <p>
          I am a self-taught young man from Guatemala. I have solid knowledge in
          various technologies such as VUE.JS, REACT, JAVASCRIPT, PHP, FLUTTER.
          To know more about me, go to me
          <span> GITHUB </span>
        </p>
        {/* social media */}
        <div className={styles.heroContact}>
          <p>Contact with me.</p>

          <div className={styles.icons}>
            <a
              href="https://github.com/Allan-Sanchez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/allan-sanchez-884607128/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoLinkedin />
            </a>
            <a
              href="https://www.youtube.com/channel/UCculhVTh_BAt-eFbDf5M1aQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LogoYoutube />
            </a>
          </div>
        </div>
        {/* buttons */}
        <div className={styles.heroButtons}>
          <div className={styles.heroButtonPrimary}>
            <Email />
            <a href="mailto:asanchezrixtun@gmail.com">Mail Me</a>
          </div>
          <div className={styles.heroButtonSecondary}>
            <Download />
            <a
              rel="noreferrer"
              href="https://drive.google.com/file/d/18USR7-WOYb9kAbGm8UfmKVxVd-KLHVb3/view?usp=sharing"
              target="_blank"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles.heroColumn}  ${styles.heroColumnImage}`}>
        <div className={styles.heroCirculeLine}></div>
        <div className={styles.heroCircule}>
          <Image
            src="https://res.cloudinary.com/dx9n8tsyu/image/upload/f_auto,q_auto/v1636494362/IMG_20211106_105652-removebg-preview_k4sd89.png"
            alt="my photo"
            width={370}
            height={499}
          />
        </div>
        <BulletPoints className={styles.heroBulletPoints} />
      </div>
    </div>
  );
}
