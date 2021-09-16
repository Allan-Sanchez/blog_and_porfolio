import React, { useContext, useState, useEffect } from "react";
import styles from "../../styles/card.module.css";
import GalleyContext from "../../context/GalleryContext";
import GalleryContext from "../../context/GalleryContext";

export default function Menu() {
  const gallleryContext = useContext(GalleryContext);
  const {
    getPostWithCategory,
    getAllPosts,
    getNameCategories,
    postsG,
    categories,
  } = gallleryContext;
  const [itemActive, setItemActive] = useState("All");
  const [menu, setMenu] = useState(categories);

  useEffect(() => {
    // const categoryArray = getNameCategories();
    setMenu(["All", ...new Set(categories)]);

    getNameCategories();
  }, [categories]);

  const handleItemActive = (item) => {
    setItemActive(item);
    if (item !== "All") {
      getPostWithCategory(item);
    } else {
      getAllPosts();
    }
  };

  return (
    <div className={styles.galleryTitle}>
      <h2>My Projects</h2>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            <div
              onClick={() => handleItemActive(item)}
              className={itemActive == item ? `${styles.active}` : null}
            >
              {item}
            </div>
          </li>
        ))}
        {/* <li>
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
        </li> */}
      </ul>
      {/* <a id="emailMe" href="mailto:example@website.com">e-mail me</a> */}
    </div>
  );
}
