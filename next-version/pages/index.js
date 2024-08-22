import { UserContext } from "../Components/context";
import HeroContent from "../Components/FirstPage/Head/HeroContent";
import HouseSlider from "../Components/FirstPage/Head/HouseSlider";
import TourRandomhouse from "../Components/FirstPage/Main/TourRandomhouse";
import Hero_Styles from "../styles/FirstPage/Hero/Hero.module.css";
import Main_Styles from "../styles/FirstPage/Main/Main.module.css";
export default function Home() {
  return (
    <>
      <section className="Hero">
        <UserContext.Provider value={Hero_Styles}>
          <HeroContent />
          <HouseSlider />
        </UserContext.Provider>
      </section>
      <section className="Main">
        <UserContext.Provider value={Main_Styles}>
          <TourRandomhouse />
        </UserContext.Provider>
      </section>
    </>
  );
}
