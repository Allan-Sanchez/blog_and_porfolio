import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/card.module.css";
import GalleryContext from "../../context/GalleryContext";
import Loading from "./Loading";

export default function GalleryCards() {
  const galleryContext = useContext(GalleryContext);
  const { postsFilter, getPostwithPagination, postsPage } = galleryContext;
  const router = useRouter();

  //loading state
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getPostwithPagination();
  }, [postsFilter]);

  const handleRedictPage = (data) => {
    setloading(true);
    router.push(`/blog/${data.slug}`);
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.galleryCard}>
          {postsPage.map((data, index) => (
            <div
              className={styles.cardContainer}
              key={index}
              onClick={() => handleRedictPage(data)}
            >
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
                <div
                  className={styles.cardContainerCategory}
                >{`# ${data.category}`}</div>
                <Link href={`/blog/${data.slug}`}>
                  <a>View Project</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
