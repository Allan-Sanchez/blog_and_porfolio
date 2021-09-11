import React from "react";
import styles from "../../styles/card.module.css";

export default function Menu() {
  return (
    <div className={styles.galleryTitle}>
      <h2>My Projects</h2>
      <ul>
        <li>
          <a href="#">All</a>
        </li>
        <li>
          <a href="#">React</a>
        </li>
        <li>
          <a href="#" className={styles.active}>
            Vue
          </a>
        </li>
        <li>
          <a href="#">Javascript</a>
        </li>
        <li>
          <a href="#">Node</a>
        </li>
        <li>
          <a href="#">Flutter</a>
        </li>
        <li>
          <a href="#">Graphql</a>
        </li>
      </ul>
      {/* <a id="emailMe" href="mailto:example@website.com">e-mail me</a> */}
    </div>
  );
}
