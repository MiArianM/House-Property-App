import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../context";
import { Trend_Houses, House_Properties } from "../../Data";
import { Avatar } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
function TourRandomhouse() {
  const [touringHouse, setTouringHouse] = useState();
  const Main_Styles = useContext(UserContext);
  const [selectedImage, setSelectedImage] = useState(1);
  const subImagesContainerRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    setTouringHouse(
      () => Trend_Houses[Math.floor(Math.random() * Trend_Houses.length)]
    );
    console.log(touringHouse);
  }, []);
  const handleImageClick = (id) => {
    setSelectedImage(id);
  };
  const handleClickOutside = (event) => {
    if (
      subImagesContainerRef.current &&
      !subImagesContainerRef.current.contains(event.target)
    ) {
      setSelectedImage(null);
    }
  };
  return (
    <>
      <div className={Main_Styles.Tour_container}>
        <div className="Title_info">
          <div className="onTitle">
            <hr className="onTitle_line" />
            <h1 className="onTitle_text">Ready to Sell!</h1>
          </div>
          <h2 className="sec_info">Let’s tour and see our house!</h2>
          <p className="sec_description">
            Houses recommended by our partners that have been curated to become
            the home of your dreams!
          </p>
          {touringHouse && (
            <>
              {" "}
              <div className={Main_Styles.TourHouse_info}>
                <h3 className={Main_Styles.TourHouse_title}>House Detail</h3>
                <div className="House-grid-container">
                  {House_Properties.map((property) => (
                    <div className="House-item">
                      <img
                        className="item-pic"
                        alt={property.alt}
                        src={property.icon}
                      />
                      <span className="item-name">
                        <span>
                          {
                            touringHouse.House_Details[
                              property.property.toLocaleLowerCase()
                            ]
                          }{" "}
                        </span>
                        {property.property}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`${Main_Styles.house_layout_container} ${Main_Styles.mobile}`}
              >
                <div className={Main_Styles.main_image_container}>
                  <img
                    src={touringHouse.House_Details.Homevideo}
                    alt="Main-House"
                    className={Main_Styles.main_image}
                  />
                  <div className={Main_Styles.play_button}></div>
                </div>
                <div className={Main_Styles.sub_images_container}>
                  {touringHouse.House_Details.More_Homeinfo.map((image) => (
                    <div
                      key={image.id}
                      className={`${Main_Styles.sub_image_item} ${
                        selectedImage === image.id
                          ? `${Main_Styles.selected}`
                          : ""
                      }`}
                      ref={subImagesContainerRef}
                      onClick={() => handleImageClick(image.id)}
                    >
                      <img src={image.src} alt={"sub-images"} />
                    </div>
                  ))}
                </div>
              </div>
              <hr className={Main_Styles.tour_desktop} />
              <div className={Main_Styles.ownerinfo}>
                <Avatar alt="owner-photo" src={touringHouse.owner.pic} />
                <div>
                  <h5 className={Main_Styles.owner_name}>
                    {touringHouse.owner.name}
                  </h5>
                  <span className={Main_Styles.owner_location}>
                    {touringHouse.owner.location}
                  </span>
                </div>
                <a className={Main_Styles.contact}>
                  <FontAwesomeIcon icon={faPhone} />
                  <span style={{ marginLeft: "16px" }}>Contact Now</span>
                </a>
              </div>
            </>
          )}
        </div>
        {touringHouse && (
          <div
            className={`${Main_Styles.house_layout_container} ${Main_Styles.desktop}`}
          >
            <div className={Main_Styles.main_image_container}>
              <img
                src={touringHouse.House_Details.Homevideo}
                alt="Main-House"
                className={Main_Styles.main_image}
              />
              <div className={Main_Styles.play_button}></div>
            </div>
            <div className={Main_Styles.sub_images_container}>
              {touringHouse.House_Details.More_Homeinfo.map((image) => (
                <div
                  key={image.id}
                  className={`${Main_Styles.sub_image_item} ${
                    selectedImage === image.id ? `${Main_Styles.selected}` : ""
                  }`}
                  ref={subImagesContainerRef}
                  onClick={() => handleImageClick(image.id)}
                >
                  <img src={image.src} alt="sub-image" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default TourRandomhouse;
