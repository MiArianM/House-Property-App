import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context";
import { House_Properties } from "../../Data";
import Link from "next/link";

function SingleHouse() {
  const router = useRouter();
  const [selectedHouse, setSelectedHouse] = useState(null);
  useEffect(() => {
    if (router.query.house) {
      setSelectedHouse(JSON.parse(router.query.house));
    }
  }, [router.query.house]);

  if (!selectedHouse) {
    return <div className="not_found">House not found</div>;
  }

  const { name, description, price, imageUrl, owner, House_Details, id } =
    selectedHouse;
  const { styles } = useContext(UserContext);
  console.log(selectedHouse);
  return (
    <div className={styles.single_house_container}>
      <div className={styles.single_house_content}>
        <div className={styles.houseinfo}>
          <h1 className={styles.single_house_title}>{name}</h1>
          <p className={styles.single_house_description}>{description}</p>
          <p className={styles.single_house_price}>
            ${Number(price).toLocaleString()}
          </p>
        </div>
        <div className={styles.single_house_details}>
          {House_Properties.map((property, index) => (
            <div className={styles.property} key={index}>
              <img
                src={property.icon}
                alt={property.alt}
                className={styles.icon}
              />
              <p>
                {property.property}:{" "}
                {House_Details[property?.property?.toLowerCase()]}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.single_house_owner}>
          <h3>Owner Information</h3>
          <img src={owner.pic} alt={owner.name} className={styles.owner_pic} />
          <p className={styles.owner_name}>{owner.name}</p>
          <p className={styles.owner_location}>{owner.location}</p>
        </div>
        <div className={styles.Gallery}>
          <img
            src={imageUrl}
            alt={name}
            className={`${styles.single_house_image} ${styles.First}`}
          />
        </div>
        <div className={styles.buttons}>
          <Link href={"./"}>Back</Link>
          <Link href={`./${id}/Purchase`}>Purchase</Link>
        </div>
      </div>
    </div>
  );
}

export default SingleHouse;
