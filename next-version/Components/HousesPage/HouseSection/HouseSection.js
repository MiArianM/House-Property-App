import React, { useEffect, useState } from "react";
import { apartment, villas } from "../../HouseList";
import HouseCard from "./HouseCard";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/router";
function HouseSection({ selected }) {
  const ranges = {
    width: parseInt(selected["Width"]) === 300 ? 10000 : 50,
    bedroom_carport: parseInt(selected["Bedrooms"]) === 4 ? 10000 : 1,
  };
  const [houses, setHouses] = useState([]);
  const dataChosen =
    selected["House Type"] === "All Houses"
      ? [...villas, ...apartment]
      : selected["House Type"] === "Villas"
      ? villas
      : apartment;
  const router = useRouter();
  const housesPerPage = parseInt(selected["Per Page"], 10) || 20;
  const handlePageChange = (event, value) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: value },
    });
  };
  const { page } = router.query;
  const currentPage = parseInt(page) || 1;
  useEffect(() => {
    setHouses(dataChosen);
    console.log(selected);
  }, [selected]);
  const finalhouses = houses
    ?.filter((house) =>
      selected["Width"] === "Any"
        ? house
        : parseInt(house.House_Details.width) >= parseInt(selected["Width"]) &&
          parseInt(house.House_Details.width) <
            parseInt(selected["Width"]) + ranges.width
    )
    ?.filter((house) =>
      selected["Bedrooms"] === "Any"
        ? house
        : parseInt(house.House_Details.bedrooms) >=
            parseInt(selected["Bedrooms"]) &&
          parseInt(house.House_Details.bedrooms) <
            parseInt(selected["Bedrooms"]) + ranges.bedroom_carport
    )
    ?.filter((house) =>
      selected["Carport"] === "Any"
        ? house
        : parseInt(house.House_Details.carport) >=
            parseInt(selected["Carport"]) &&
          parseInt(house.House_Details.carport) <
            parseInt(selected["Carport"]) + ranges.bedroom_carport
    )
    ?.filter((house) =>
      selected["Min price"] === undefined
        ? house
        : parseInt(house.price) >=
          parseInt(selected["Min price"].replace(/[^0-9-.]/g, ""))
    )
    ?.filter((house) =>
      selected["Max price"] === undefined
        ? house
        : parseInt(house.price) <
          parseInt(selected["Max price"].replace(/[^0-9-.]/g, ""))
    );
  const indexOfLastHouse = currentPage * housesPerPage;
  const indexOfFirstHouse = indexOfLastHouse - housesPerPage;
  const currentHouses = finalhouses.slice(indexOfFirstHouse, indexOfLastHouse);

  return (
    <>
      <div className="house-gallery">
        {currentHouses.map((house, index) => (
          <HouseCard key={index} house={house} />
        ))}
      </div>
      <Pagination
        count={Math.ceil(finalhouses.length / housesPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
      />
    </>
  );
}

export default HouseSection;
