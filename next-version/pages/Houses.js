import React from "react";
import Hero_Styles from "../styles/HousesPage/Hero/Hero.module.css";
import Main_Styles from "../styles/HousesPage/Main/Main.module.css";
import { UserContext } from "../Components/context";

function Houses() {
  return (
    <section className="Hero Houses">
      <UserContext.Provider value={Hero_Styles}>ss</UserContext.Provider>
    </section>
  );
}

export default Houses;
