import React from "react";
import Hero_Styles from "../../styles/HousesPage/Hero/Hero.module.css";
import Main_Styles from "../../styles/HousesPage/Main/Main.module.css";
import { UserContext } from "../../Components/context";
import Filters from "../../Components/HousesPage/Filters";
function Houses() {
  return (
    <section className="Hero Houses">
      <UserContext.Provider value={Hero_Styles}>
        <Filters />
      </UserContext.Provider>
    </section>
  );
}

export default Houses;
