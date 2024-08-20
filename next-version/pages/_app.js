import "../styles/global.css";
import DefaultNav from "../Components/NavBar/DefaultNav";
import HamburgerMenu from "../Components/NavBar/HamburgerMenu";
import styles from "../styles/Hero/Hero.module.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="background_blur1"></div>
      <div className="background_blur2"></div>
      <div className="container">
        <DefaultNav styles={styles} />
        <HamburgerMenu styles={styles} />
        <Component {...pageProps} />;
      </div>
    </>
  );
}
