import React, { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/card.module.css";
import GalleryContext from "../../context/GalleryContext";

export default function GalleryCards() {
  const galleryContext = useContext(GalleryContext);
  const { postsFilter, getPostwithPagination, postsPage, } = galleryContext;

  useEffect(() => {
    getPostwithPagination();
  }, [postsFilter]);
  return (
    <div className={styles.galleryCard}>
      {/* card 1 */}
      {postsPage.map((data, index) => (
        <div className={styles.cardContainer} key={index}>
          <div className={styles.cardImageContainer}>
            <Image
              src={data.url}
              alt={data.title}
              width={data.width}
              height={data.height}
              objectFit="contain"
            />
          </div>
          <h3 className={styles.cardTitle}>{data.title}.</h3>
          <div className={styles.cardContainerButton}>
            <div>
              <Link href={`/blog/${data.slug}`}>
                <a>View Project</a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
