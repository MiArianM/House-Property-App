import "../styles/global.css";
import DefaultNav from "../Components/NavBar/DefaultNav";
import HamburgerMenu from "../Components/NavBar/HamburgerMenu";
import styles from "../styles/FirstPage/Hero/Hero.module.css";
import WhyUs from "../Components/FirstPage/Main/WhyUs";
import { useRouter } from "next/router";
import Main_Styles from "../styles/FirstPage/Main/Main.module.css";
import HouseSelection from "../Components/FirstPage/Main/HouseSelection";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <div className="background_blur1"></div>
      <div className="background_blur2"></div>
      <div className="container">
        <DefaultNav styles={styles} />
        <HamburgerMenu styles={styles} />
        <Component {...pageProps} />;
      </div>
      {router.pathname === "/" && (
        <>
          <WhyUs Main_Styles={Main_Styles} />
          <HouseSelection Main_Styles={Main_Styles} />
        </>
      )}
      <div className="background_blur3"></div>
      <div className="background_blur4"></div>
    </>
  );
}
