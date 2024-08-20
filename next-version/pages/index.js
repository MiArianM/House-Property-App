import { UserContext } from "../Components/context";
import styles from "../styles/Hero/Hero.module.css";
import HeroContent from "../Components/Head/HeroContent";
import HouseSlider from "../Components/Head/HouseSlider";
export default function Home() {
  return (
    <>
      <section className="Hero">
        <UserContext.Provider value={styles}>
          <HeroContent />
          <HouseSlider />
        </UserContext.Provider>
      </section>
    </>
  );
}
