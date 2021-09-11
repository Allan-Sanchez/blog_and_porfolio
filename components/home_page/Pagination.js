import React from "react";
import styles from "../../styles/card.module.css";

export default function Pagination() {
  return (
    <div className={styles.galleryPagination}>
      <div>1</div>
      <div className={styles.active}>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      ...
      <div>80</div>
    </div>
  );
}
