import React, { useState, useContext, useEffect } from "react";
import styles from "../../styles/card.module.css";
import GalleryContext from "../../context/GalleryContext";

export default function Pagination() {
  const galleryContext = useContext(GalleryContext);
  const [btnPagination, setBtnPagination] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const { postsFilter, setPreviousPage, setNextPage, getPostwithPagination } =
    galleryContext;

  useEffect(() => {
    //CARD GALLERY NUMBER
    setTotalPages(Math.ceil(postsFilter.length / 5));
    const arrayTemp = [];
    for (let index = 0; index < totalPages; index++) {
      arrayTemp.push(index);
    }
    setBtnPagination(arrayTemp);

    // setBtnPagination(postsFilter);
  }, [postsFilter, totalPages]);
  const [pageActive, setPageActive] = useState(0);

  const handleClickPage = (btn) => {
    setPageActive(btn);
    setPreviousPage(btn * 5);
    setNextPage(btn * 5 + 5);
    getPostwithPagination();
  };
  // console.log(posts);
  return (
    <>
      <div className={styles.galleryPagination}>
        <div>{`<`}</div>
        {btnPagination.map((page, index) => (
          <div
            key={index}
            className={index == pageActive ? `${styles.active}` : null}
            onClick={() => handleClickPage(index)}
          >
            {index + 1}
          </div>
        ))}
        ...
        <div className={styles.galleryPaginationFinalBtn}>{totalPages}</div>
      </div>
      {/* // <div className={styles.galleryPagination}>
    //   <div>1</div>
    //   <div className={styles.active}>2</div>
    //   <div>3</div>
    //   <div>4</div>
    //   <div>5</div>
    //   ...
    // </div> */}
    </>
  );
}
