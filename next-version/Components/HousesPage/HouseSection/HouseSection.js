import React, { useEffect, useState } from "react";
import { villas } from "../../HouseList";
import HouseCard from "./HouseCard";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/router";
function HouseSection({ selected }) {
  const [houses, setHouses] = useState([]);
  const router = useRouter();
  const Filters = {
    HouseType: selected["House Type"] || "All Houses",
    housesPerPage: parseInt(selected["Per Page"], 10) || 20,
    HouseWidth: parseInt(selected["Width"], 10) || "Any",
    HouseBedrooms: parseInt(selected["Bedrooms"]) || "Any",
    HouseCarport: parseInt(selected["Carport"]) || "Any",

    handlePageChange: (event, value) => {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, page: value },
      });
    },
  };
  const { page } = router.query;
  const { Width } = router.query;
  const { "House Type": HouseType } = router.query;
  const { Carport } = router.query;
  const { Bedrooms } = router.query;
  console.log(HouseType);
  const currentPage = parseInt(page) || 1;

  useEffect(() => {
    setHouses(villas);
  }, []);
  const indexOfLastHouse = currentPage * Filters.housesPerPage;
  const indexOfFirstHouse = indexOfLastHouse - Filters.housesPerPage;
  const currentHouses = houses.slice(indexOfFirstHouse, indexOfLastHouse);
  const finalHouses =
    Filters.HouseWidth === "Any"
      ? currentHouses
      : currentHouses.filter(
          (house) =>
            house.House_Details.width >= Filters.HouseWidth &&
            house.House_Details.width < Filters.HouseWidth + 50
        );

  return (
    <>
      <div className="house-gallery">
        {finalHouses.map((house, index) => (
          <HouseCard key={index} house={house} />
        ))}
      </div>
      <Pagination
        count={Math.ceil(houses.length / Filters.housesPerPage)}
        page={currentPage}
        onChange={Filters.handlePageChange}
        color="primary"
      />
    </>
  );
}

export default HouseSection;
