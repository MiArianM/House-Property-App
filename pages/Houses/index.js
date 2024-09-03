import React, { useState } from "react";
import Hero_Styles from "../../styles/HousesPage/Hero/Hero.module.css";
import Main_Styles from "../../styles/HousesPage/Main/Main.module.css";
import { UserContext } from "../../Components/context";
import Filters from "../../Components/HousesPage/filter/Filters";
import HouseSection from "../../Components/HousesPage/HouseSection/HouseSection";
import { useRouter } from "next/router";
function Houses() {
  const router = useRouter();
  const [selected, setSelected] = useState({
    "House Type": router.query["House Type"] || "All Houses",
    "Per Page": "10",
    Width: "Any",
    Bedrooms: "Any",
    Carport: "Any",
    Price: "All",
    "Min price": undefined,
    "Max price": undefined,
  });
  return (
    <section className="Hero Houses">
      <UserContext.Provider value={{ Hero_Styles, Main_Styles }}>
        <Filters data={{ selected, setSelected }} />
        <HouseSection selected={selected} />
      </UserContext.Provider>
    </section>
  );
}

export default Houses;
