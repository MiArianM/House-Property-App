import React from "react";

function HouseCard({ house }) {
  const { name, House_Details, description, imageUrl, price, owner } = house;

  return (
    <div className="house-card">
      <img src={imageUrl} alt={name} className="house-card-image" />
      <div className="house-card-content">
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="price">${Number(price).toLocaleString()}</p>
        <div className="house-details">
          <p>Bedrooms: {House_Details.bedrooms}</p>
          <p>Bathrooms: {House_Details.bathroom}</p>
          <p>Carport: {House_Details.carport}</p>
          <p>Floors: {House_Details.floor}</p>
          <p>Width(Square metre): {House_Details.width}</p>
        </div>
        <div className="house-owner">
          <img src={owner.pic} alt={owner.name} className="owner-pic" />
          <div>
            <p>{owner.name}</p>
            <p>{owner.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseCard;
