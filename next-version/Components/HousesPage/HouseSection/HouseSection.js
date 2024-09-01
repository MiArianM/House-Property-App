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
  const dataChosen =
    selected["House Type"] === "All Houses"
      ? [...villas, ...apartment]
      : selected["House Type"] === "Villas"
      ? villas
      : apartment;
  const router = useRouter();
  const housesPerPage = parseInt(selected["Per Page"]) || 10;
  const handlePageChange = (event, value) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: value },
    });
  };
  const fetchingDataForCards = () => {
    if (photos.length > 0) {
      villas
        .slice(
          currentPage * housesPerPage - housesPerPage,
          currentPage * housesPerPage + 1
        )
        .forEach((villa, index) => {
          if (photos[index]) {
            villa.id = photos[index].id;
            villa.imageUrl = photos[index].urls.regular;
            villa.description =
              photos[index].description || "No description available";
            villa.owner.name = photos[index].user.name;
            villa.owner.location =
              photos[index].user.location || "Unknown location";
            villa.owner.pic = photos[index].user.profile_image.medium;
          }
        });

      apartment
        .slice(
          currentPage * housesPerPage - housesPerPage,
          currentPage * housesPerPage + 1
        )
        .forEach((apt, index) => {
          if (photos[index]) {
            apt.id = photos[index].id;
            apt.imageUrl = photos[index].urls.regular;
            apt.description =
              photos[index].description || "No description available";
            apt.owner.name = photos[index].user.name;
            apt.owner.location =
              photos[index].user.location || "Unknown location";
            apt.owner.pic = photos[index].user.profile_image.medium;
          }
        });
    }
  };
  const { page } = router.query;
  const currentPage = parseInt(page) || 1;
  useEffect(() => {
    setHouses(dataChosen);
    console.log(
      villas.slice(
        currentPage * housesPerPage - housesPerPage,
        currentPage * housesPerPage + 1
      )
    );
  }, [selected]);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      try {
        const result = await api.search.getPhotos({
          query: "house",
          orientation: "landscape",
          per_page: housesPerPage,
          page: currentPage,
        });

        if (result && result.response) {
          setPhotos(result.response.results);
        }
      } catch (error) {
        console.log("Something went wrong!", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [currentPage, housesPerPage]);

  useEffect(() => {
    fetchingDataForCards();
  }, [photos]);
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
  if (loading) {
    return <div>Loading...</div>;
  }

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
