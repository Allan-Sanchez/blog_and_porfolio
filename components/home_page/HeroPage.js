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
              href="https://www.youtube.com/channel/UCculhVTh_BAt-eFbDf5M1aQ"
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
            <a href="#">Mail Me</a>
          </div>
          <div className={styles.heroButtonSecondary}>
            <Download />
            <a href="#">Download CV</a>
          </div>
        </div>
      </div>

      <div className={`${styles.heroColumn}  ${styles.heroColumnImage}`}>
        <div className={styles.heroCirculeLine}></div>
        <div className={styles.heroCircule}>
          <Image
            src="https://res.cloudinary.com/dx9n8tsyu/image/upload/v1588627345/017-monster_ks4hbg.png"
            alt="monster avatar"
            width={250}
            height={250}
          />
        </div>
        <BulletPoints className={styles.heroBulletPoints} />
      </div>
    </div>
  );
}
