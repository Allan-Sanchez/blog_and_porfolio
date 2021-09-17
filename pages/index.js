import { useEffect, useContext } from "react";
import Head from "next/head";
// styles
// components
import Navigation from "../components/home_page/Navigation";
import HeroPage from "../components/home_page/HeroPage";
import GalleryCards from "../components/home_page/GalleryCards";
import ContactHero from "../components/home_page/ContactHero";
import Pagination from "../components/home_page/Pagination";
import Menu from "../components/home_page/Menu";
import Footer from "../components/home_page/Footer";
// icons
import About from "../components/home_page/About";
//context
import GalleryContext from "../context/GalleryContext";
//load the post
import { getAllFilesMetaData } from "../lib/mdx";

export default function Home({ posts }) {
  const galleryContext = useContext(GalleryContext);
  const { setPosts, getNameCategories } = galleryContext;

  useEffect(() => {
    setPosts(posts);
    getNameCategories();
  }, []);
  return (
    <>
      <Head>
        <title>Portfolio | Allan Sanchez</title>
        <meta
          name="description"
          content="Portfolio by Allan Sanchez, Web Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <main>
        <HeroPage />

        <About />

        <section id="projects" className="cardGallerySection">
          <Menu />

          <GalleryCards />

          <Pagination />
        </section>
        <ContactHero />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllFilesMetaData();
  return {
    props: { posts },
  };
}
