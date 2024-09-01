import React, { useContext } from "react";
import { House_Properties } from "../../Data";
import { UserContext } from "../../context";
import Link from "next/link";
function HouseCard({ house }) {
  const { Main_Styles } = useContext(UserContext);
  const { name, House_Details, description, imageUrl, price, owner, id } =
    house;
  return (
    <div className="house-card">
      <img src={imageUrl} alt={name} className="house-card-image" />
      <div className="house-card-content">
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="price">${Number(price).toLocaleString()}</p>
        <div className="house-details">
          <div className="House-grid-container">
            {House_Properties.map((property, index) => (
              <div key={index}>
                <img src={property.icon} alt={property.alt} className="icon" />
                <p>
                  {property.property}:{" "}
                  {House_Details[property.property.toLowerCase()]}
                </p>
              </div>
            ))}
          </div>
          <div className="house-owner card">
            <img src={owner.pic} alt={owner.name} className="owner-pic" />
            <div>
              <p>{owner.name}</p>
              <p>{owner.location}</p>
            </div>
          </div>
          <Link className={Main_Styles.DetailButton} href={`./Houses/${id}`}>
            <button>More Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HouseCard;
