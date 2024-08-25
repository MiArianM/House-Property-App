import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../context";
import { Trend_Houses, subImages } from "../../Data";
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
                  <div className="House-item">
                    <img
                      className="item-pic"
                      alt=""
                      src="https://i.postimg.cc/mk2wgBbP/bedroom.png"
                    />
                    <span className="item-name">
                      <span>{touringHouse.House_Details.bedrooms} </span>
                      Bedrooms
                    </span>
                  </div>
                  <div className="House-item">
                    <img
                      className="item-pic"
                      alt=""
                      src="https://i.postimg.cc/rm9jTKL6/bathtub.png"
                    />
                    <span className="item-name">
                      {" "}
                      <span>{touringHouse.House_Details.bathroom} </span>
                      Bathrooms
                    </span>
                  </div>
                  <div className="House-item">
                    <img
                      className="item-pic"
                      alt=""
                      src="https://i.postimg.cc/Gt7jBV2q/garage.png"
                    />
                    <span className="item-name">
                      {" "}
                      <span>{touringHouse.House_Details.carport} </span>Carpot
                    </span>
                  </div>
                  <div className="House-item">
                    <img
                      className="item-pic"
                      alt=""
                      src="https://i.postimg.cc/vByhC5kL/stairs.png"
                    />
                    <span className="item-name">
                      {" "}
                      <span>{touringHouse.House_Details.floor} </span>Floors
                    </span>
                  </div>
                  <div className="House-item">
                    <img
                      className="item-pic"
                      alt=""
                      src="https://i.postimg.cc/tgWDrBS4/arrow.png"
                    />
                    <span className="item-name">
                      {" "}
                      <span>{touringHouse.House_Details.width} </span>width
                    </span>
                  </div>
                </div>
              </div>
              <div className="house-layout-container mobile">
                <div className="main-image-container">
                  <img
                    src="https://i.postimg.cc/768Yw3NY/pexels-kaboompics-6343.jpg"
                    alt="Main House"
                    className="main-image"
                  />
                  <div className="play-button"></div>
                </div>
                <div className="sub-images-container">
                  {subImages.map((image) => (
                    <div
                      key={image.id}
                      className={`sub-image-item ${
                        selectedImage === image.id ? "selected" : ""
                      }`}
                      ref={subImagesContainerRef}
                      onClick={() => handleImageClick(image.id)}
                    >
                      <img src={image.src} alt={image.alt} />
                    </div>
                  ))}
                </div>
              </div>
              <hr className="tour-desktop" />
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
        <div className="house-layout-container desktop">
          <div className="main-image-container">
            <img
              src="https://i.postimg.cc/768Yw3NY/pexels-kaboompics-6343.jpg"
              alt="Main House"
              className="main-image"
            />
            <div className="play-button"></div>
          </div>
          <div className="sub-images-container">
            {subImages.map((image) => (
              <div
                key={image.id}
                className={`sub-image-item ${
                  selectedImage === image.id ? "selected" : ""
                }`}
                ref={subImagesContainerRef}
                onClick={() => handleImageClick(image.id)}
              >
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TourRandomhouse;
