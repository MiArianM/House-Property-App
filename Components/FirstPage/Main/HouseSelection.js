import React from "react";
import { apartment, villas } from "../../HouseList";
import Link from "next/link";

function HouseSelection({ Main_Styles }) {
  return (
    <div className="container houseselection">
      <div className="Title_info">
        <div className="onTitle">
          <hr className="onTitle_line" />
          <h1 className="onTitle_text">Home Selection Time</h1>
        </div>
        <h2 className="sec_info">What Type of House You need ?</h2>
      </div>
      <div className={Main_Styles.houses}>
        <Link href="/Houses">
          <div className={Main_Styles.fig}>
            <img src="https://i.postimg.cc/x1YbZMcK/House.png" />
            <div className={Main_Styles.caption}>
              <h3>All Houses</h3>
              <h5>{villas.length + apartment.length} Found !</h5>
            </div>
          </div>
        </Link>
        <Link href={"/Houses?House+Type=Villas"}>
          <div className={Main_Styles.fig}>
            <img src="https://i.postimg.cc/tRK6hLbv/villa.png" />
            <div className={Main_Styles.caption}>
              <h3>Villas</h3>
              <h5>{villas.length} Found !</h5>
            </div>
          </div>
        </Link>
        <Link href={"/Houses?House+Type=Apartments"}>
          <div className={Main_Styles.fig}>
            <img src="https://i.postimg.cc/527kgw3t/apartment.png" />
            <div className={Main_Styles.caption}>
              <h3>Apartments</h3>
              <h5>{apartment.length} Found !</h5>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HouseSelection;
