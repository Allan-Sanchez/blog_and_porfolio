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
  const { setPosts } = galleryContext;

  useEffect(() => {
    if (posts.length > 0) {
      posts.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    }
    setPosts(posts);
  }, [posts]);
  return (
    <>
      <Head>
        <title>Allan Sanchez | Portfolio, Frontend Developer, React, Vue</title>
        <meta
          name="description"
          content="Portfolio, cv, resume, web projects react, vue, node, graphql also you will find mobile projects developed in flutter."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Allan Sanchez | Portfolio, Frontend Developer, React, Vue "
        />
        <meta property="og:site_name" content="blog-and-portfolio" />
        <meta
          property="og:url"
          content="https://blog-and-portfolio.vercel.app/"
        />
        <meta
          property="og:description"
          content="Portfolio, CV, summary, web projects react, vue, node, graphql also you will find mobile projects developed in flutter."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dx9n8tsyu/image/upload/v1636494362/IMG_20211106_105652-removebg-preview_k4sd89.png"
        />
        <meta name="twitter:card" content="summary"></meta>
        {/* TODO:: change domain */}
        <meta name="twitter:site" content="@blog-and-portfolio" />
        <meta name="twitter:creator" content="@AllanSanchez2" />
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
