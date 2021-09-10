import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/card.module.css";

export default function GalleryCards({ posts }) {

  const [imageList, SetImageList] = useState(posts);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center">
      {/* card 1 */}
      {imageList.map((data, index) => (
        <div
          className="cardContainer h-80 w-96 p-5 bg-gray-800 rounded-2xl  cursor-pointer"
          key={index}
        >
          <div className=" cardImageContainer h-52 w-full bg-gray-600 rounded-xl flex justify-center relative">
            <Image
              src={data.url}
              alt={data.title}
              width={data.width}
              height={data.height}
              objectFit="contain"
            />
          </div>
          <h3 className={`${styles.cardTitle} mt-3 font-bold text-xl`}>
            {data.title}.
          </h3>
          <div className="w-full flex justify-end">
            <div className="h-10 bg-yellow-600 px-5 rounded-3xl flex justify-center items-center">
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
