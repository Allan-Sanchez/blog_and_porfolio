import React from "react";
import styles from "../../styles/about.module.css";
import Image from "next/image";

//Logos SVG
// import SvgHtml from "../svg/tecnologies/SvgHtml";
// import SvgCss from "../svg/tecnologies/SvgCss";
import SvgJavascript from "../svg/tecnologies/SvgJavascript";
import SvgReact from "../svg/tecnologies/SvgReact";
import SvgVue from "../svg/tecnologies/SvgVue";
import SvgNext from "../svg/tecnologies/SvgNext";
import SvgNode from "../svg/tecnologies/SvgNode";
// import SvgNuxt from "../svg/tecnologies/SvgNuxt";
import SvgMongo from "../svg/tecnologies/SvgMongo";
import SvgMysql from "../svg/tecnologies/SvgMysql";
import SvgFirebase from "../svg/tecnologies/SvgFirebase";
import SvgGraphql from "../svg/tecnologies/SvgGraphql";
import SvgFlutter from "../svg/tecnologies/SvgFlutter";
import SvgTypescript from "../svg/tecnologies/SvgTypescript";
import SvgLambda from "../svg/tecnologies/SvgLambda";

export default function About() {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.cardAbout}>
        <div className={styles.cardAboutImage}>
          <Image
            src="https://res.cloudinary.com/dx9n8tsyu/image/upload/v1672261428/hero_photo_qthy6g.jpg"
            alt="monster avatar"
            layout="fill"
          />
        </div>
        <div className={styles.cardAboutInfo}>
          <h3 className="text-2xl font-bold ">About Me</h3>
          <p>
            My name is Allan Edrey Sanchez Rixtun, web developer but with solid
            knowledge in backend and mobile technology with flutter.
          </p>
          <br />
          <p>
            I live in Guatemala, I have a closed curriculum in Systems
            Engineering and I studied at the Mariano Galvez University of
            Guatemala.
          </p>
          <br />
          <p>Main technologies with which I have carried out projects</p>
          <div className={styles.iconCardAbout}>
            <SvgLambda className={styles.iconAbout} />
            <SvgTypescript className={styles.iconAbout} />
            <SvgJavascript className={styles.iconAbout} />
            <SvgReact className={styles.iconAbout} />
            <SvgVue className={styles.iconAbout} />
            <SvgNext className={styles.iconAbout} />
            <SvgNode className={styles.iconAbout} />
            <SvgMongo className={styles.iconAbout} />
            <SvgMysql className={styles.iconAbout} />
            <SvgFirebase className={styles.iconAbout} />
            <SvgGraphql className={styles.iconAbout} />
            <SvgFlutter className={styles.iconAbout} />
          </div>
        </div>
      </div>
    </div>
  );
}
