import "../styles/globals.css";
import GalleryState from "../context/GalleryState";

function MyApp({ Component, pageProps }) {
  return (
    <GalleryState>
      <Component {...pageProps} />
    </GalleryState>
  );
}

export default MyApp;
