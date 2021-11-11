import React from "react";
import style from "../../styles/loading.module.css";

export default function Loading() {
  return (
    <div className={style.ldsRingContainer}>
      <div className={style.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
