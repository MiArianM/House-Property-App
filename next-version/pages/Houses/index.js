import React, { useState } from "react";
import Hero_Styles from "../../styles/HousesPage/Hero/Hero.module.css";
import Main_Styles from "../../styles/HousesPage/Main/Main.module.css";
import { UserContext } from "../../Components/context";
import Filters from "../../Components/HousesPage/filter/Filters";
import HouseSection from "../../Components/HousesPage/HouseSection/HouseSection";
function Houses() {
  const [selected, setSelected] = useState({
    "House Type": "All Houses",
    "Per Page": "20",
    Width: "Any",
    Bedrooms: "Any",
    Carport: "Any",
    "Min price": undefined,
    "Max price": undefined,
  });
  return (
    <section className="Hero Houses">
      <UserContext.Provider value={Hero_Styles}>
        <Filters data={{ selected, setSelected }} />
        <HouseSection selected={selected} />
      </UserContext.Provider>
    </section>
  );
}

export default Houses;
