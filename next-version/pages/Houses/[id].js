import React, { useContext } from "react";
import styles from "../../styles/SingleHouse/style.module.css";
import { UserContext } from "../../Components/context";
import SingleHouse from "../../Components/HousesPage/SingleHouse/SingleHouse";
function HousePage() {
  return (
    <section className="SingleHouse">
      <UserContext.Provider value={{ styles }}>
        <SingleHouse />
      </UserContext.Provider>
    </section>
  );
}

export default HousePage;
HousePage;
