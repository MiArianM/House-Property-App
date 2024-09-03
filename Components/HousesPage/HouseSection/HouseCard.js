import React, { useContext } from "react";
import { House_Properties } from "../../Data";
import { UserContext } from "../../context";
import Link from "next/link";
import { useRouter } from "next/router";
function HouseCard({ house }) {
  const { Main_Styles } = useContext(UserContext);
  const router = useRouter();
  const { name, House_Details, description, imageUrl, price, owner, id } =
    house;
  const handleMoreDetailsClick = () => {
    router.push(
      {
        pathname: `/Houses/${id}`,
        query: { house: JSON.stringify(house) },
      },
      `/Houses/${id}`,
      { shallow: true }
    );
  };
  return (
    <div className={Main_Styles.house_card}>
      <img src={imageUrl} alt={name} className={Main_Styles.house_card_image} />
      <div className={Main_Styles.house_card_content}>
        <h2 className={Main_Styles.content_title}>{name}</h2>
        <p className={Main_Styles.content_description}>{description}</p>
        <p className={Main_Styles.price}>${Number(price).toLocaleString()}</p>
        <div className={Main_Styles.House_grid_container}>
          {House_Properties.map((property, index) => (
            <div className={Main_Styles.property} key={index}>
              <img
                src={property.icon}
                alt={property.alt}
                className={Main_Styles.icon}
              />
              <p>
                {property.property}:{" "}
                {House_Details[property.property.toLowerCase()]}
              </p>
            </div>
          ))}
        </div>
        <div className={`${Main_Styles.house_owner} ${Main_Styles.card}`}>
          <img
            src={owner.pic}
            alt={owner.name}
            className={Main_Styles.owner_pic}
          />
          <div>
            <p className={Main_Styles.owner_name}>{owner.name}</p>
            <p className={Main_Styles.owner_location}>{owner.location}</p>
          </div>
        </div>
        <button
          onClick={handleMoreDetailsClick}
          className={Main_Styles.DetailButton}
        >
          More Details
        </button>
      </div>
    </div>
  );
}

export default HouseCard;
