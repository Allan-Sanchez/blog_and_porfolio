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


export default function Home() {



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

        <section id="projects" className="pt-20">
          <Menu />

          <GalleryCards />
          <Pagination />
          <ContactHero />
        </section>
      </main>
      <Footer />
    </>
  );
}
