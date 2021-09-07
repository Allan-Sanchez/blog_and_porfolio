import React, { useEffect } from "react";
import styles from "../../styles/navbar.module.css";

export default function HoverEffectNav({ width, height }) {
  useEffect(() => {
    console.log(height);
  }, [height]);

  if (height >= 0 && height < 582) {
    return <div className={` ${styles.markerHeroPage}`}></div>;
  }
  if (height > 582 && height < 1251) {
    return (
      <div
        style={{ left: "33%" }}
        className={` ${styles.markerHeroPage}`}
      ></div>
    );
  }
  if (height >= 1251 && height < 2300) {
    return (
      <div
        style={{ left: "58%" }}
        className={` ${styles.markerHeroPage}`}
      ></div>
    );
  } else {
    return (
      <div
        style={{ left: "83%" }}
        className={` ${styles.markerHeroPage}`}
      ></div>
    );
  }
}
