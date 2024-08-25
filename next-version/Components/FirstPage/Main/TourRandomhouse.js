import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context";
import { Trend_Houses } from "../../Data";
import { Avatar } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
function TourRandomhouse() {
  const [touringHouse, setTouringHouse] = useState();
  const Main_Styles = useContext(UserContext);
  useEffect(() => {
    setTouringHouse(
      () => Trend_Houses[Math.floor(Math.random() * Trend_Houses.length)]
    );
  }, []);

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
              <hr
                style={{
                  border: "1px solid #F0F3FD",
                  maxWidth: "440px",
                  textAlign: "left",
                  margin: "0 !important",
                  marginLeft: "35px",
                  marginRight: "50px",
                }}
              />
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
      </div>
    </>
  );
}

export default TourRandomhouse;
