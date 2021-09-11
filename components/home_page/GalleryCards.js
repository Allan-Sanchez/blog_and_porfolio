import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/card.module.css";

export default function GalleryCards({ posts }) {
  const [imageList, SetImageList] = useState(posts);

  return (
    <div className={styles.galleryCard}>
      {/* card 1 */}
      {imageList.map((data, index) => (
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
            <div >
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
