import React, { useEffect, useState } from "react";
import { apartment, villas } from "../../HouseList";
import HouseCard from "./HouseCard";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/router";
import { createApi } from "unsplash-js";

function HouseSection({ selected }) {
  const ranges = {
    width: parseInt(selected["Width"]) === 300 ? 10000 : 50,
    bedroom_carport: parseInt(selected["Bedrooms"]) === 4 ? 10000 : 1,
  };

  const api = createApi({
    accessKey: "SSbrRMFYxoeUyTlAnHM1lqHyi25CTtN_8eF--Z_KqUY",
  });

  const [houses, setHouses] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalHouses, setTotalHouses] = useState(0);

  const router = useRouter();
  const { page } = router.query;
  const currentPage = parseInt(page) || 1;
  const housesPerPage = parseInt(selected["Per Page"]) || 10;

  const dataChosen =
    selected["House Type"] === "All Houses"
      ? [...villas, ...apartment]
      : selected["House Type"] === "Villas"
      ? villas
      : apartment;

  const applyFilters = (houses) => {
    return houses
      .filter((house) =>
        selected["Width"] === "Any"
          ? house
          : parseInt(house.House_Details.width) >=
              parseInt(selected["Width"]) &&
            parseInt(house.House_Details.width) <
              parseInt(selected["Width"]) + ranges.width
      )
      .filter((house) =>
        selected["Bedrooms"] === "Any"
          ? house
          : parseInt(house.House_Details.bedrooms) >=
              parseInt(selected["Bedrooms"]) &&
            parseInt(house.House_Details.bedrooms) <
              parseInt(selected["Bedrooms"]) + ranges.bedroom_carport
      )
      .filter((house) =>
        selected["Carport"] === "Any"
          ? house
          : parseInt(house.House_Details.carport) >=
              parseInt(selected["Carport"]) &&
            parseInt(house.House_Details.carport) <
              parseInt(selected["Carport"]) + ranges.bedroom_carport
      )
      .filter((house) =>
        selected["Min price"] === undefined
          ? house
          : parseInt(house.price) >=
            parseInt(selected["Min price"].replace(/[^0-9-.]/g, ""))
      )
      .filter((house) =>
        selected["Max price"] === undefined
          ? house
          : parseInt(house.price) <
            parseInt(selected["Max price"].replace(/[^0-9-.]/g, ""))
      );
  };

  const fetchPhotosAndUpdateHouses = async () => {
    setLoading(true);
    setPhotos([]);
    try {
      const result = await api.search.getPhotos({
        query: "house",
        orientation: "landscape",
        per_page: housesPerPage,
        page: currentPage,
      });

      if (result && result.response) {
        setPhotos(result.response.results);

        const filteredHouses = applyFilters(dataChosen);

        const updatedHouses = filteredHouses
          .slice((currentPage - 1) * housesPerPage, currentPage * housesPerPage)
          .map((house, index) => {
            const photo = result.response.results[index];
            return {
              ...house,
              id: photo?.id,
              imageUrl: photo?.urls?.regular,
              description: photo?.description || "No description available",
              owner: {
                name: photo?.user?.name,
                location: photo?.user?.location || "Unknown location",
                pic: photo?.user?.profile_image?.medium,
              },
            };
          });

        setHouses(updatedHouses);
        setTotalHouses(filteredHouses.length);
      }
    } catch (error) {
      console.error("Something went wrong!", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotosAndUpdateHouses();
  }, [currentPage, selected]);

  const handlePageChange = (event, value) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: value },
    });
  };

  if (loading) {
    return (
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return (
    <>
      <div className="house-gallery">
        {houses.map((house, index) => (
          <HouseCard key={index} house={house} />
        ))}
      </div>
      <Pagination
        count={Math.ceil(totalHouses / housesPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
      />
    </>
  );
}

export default HouseSection;
