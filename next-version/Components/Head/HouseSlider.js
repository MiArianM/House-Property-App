import React, { useContext, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Avatar from "@mui/material/Avatar";
import { UserContext } from "../context";
import { Trend_Houses } from "../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
function HouseSlider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const styles = useContext(UserContext);
  const [filter, setFilter] = useState("House"); // State to store the selected filter
  const filteredHouses =
    filter === "House"
      ? Trend_Houses
      : Trend_Houses.filter((house) => house.type === filter);
  return (
    <div className={`${styles.slide_container}`}>
      <div className={styles.slider_head}>
        <div className="Title_info">
          <div className="onTitle">
            <hr className="onTitle_line" />
            <h1 className="onTitle_text">Our Recommendation</h1>
          </div>
          <h2 className="sec_info">Featured House</h2>
        </div>
        <div className={styles.home_type_list}>
          <div
            onClick={() => setFilter("House")}
            className={`${styles.home_type} ${
              filter === "House" ? styles.activated : ""
            }`}
          >
            <img
              src="https://i.postimg.cc/7ZWLD017/cottage.png"
              alt="House_Type"
            />
            <span className={styles.home_name}>House</span>
          </div>
          <div
            onClick={() => setFilter("villa")}
            className={`${styles.home_type} ${
              filter === "villa" ? styles.activated : ""
            }`}
          >
            <img
              src="https://i.postimg.cc/pTNX5v6L/house.png"
              alt="House_Type"
            />
            <span className={styles.home_name}>Villa</span>
          </div>
          <div
            onClick={() => setFilter("apartment")}
            className={`${styles.home_type} ${
              filter === "apartment" ? styles.activated : ""
            }`}
          >
            <img
              src="https://i.postimg.cc/xdN1d8gZ/residential.png"
              alt="House_Type"
            />
            <span className={styles.home_name}>Apartment</span>
          </div>
        </div>
        <div className={styles.sliderbuttons}>
          <div ref={navigationPrevRef} className={styles.favRight}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div ref={navigationNextRef} className={styles.favLeft}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>

      <Swiper
        className={styles.slide_content}
        slidesPerView={5}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        modules={[Navigation]}
        spaceBetween={1}
        breakpoints={{
          0: { slidesPerView: 1 },
          750: { slidesPerView: 2 },
          1100: { slidesPerView: 3 },
          1300: { slidesPerView: 4 },
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
      >
        {filteredHouses.map((card, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className={styles.card}>
              <div className={styles.image_content}>
                <span className={styles.overlay}></span>
                <div className={styles.card_image}>
                  <img
                    src={card.imageUrl}
                    alt="House-Image"
                    className={styles.card_img}
                  />
                  {card.badge && (
                    <div className={styles.badge}>
                      <span
                        className={`${styles.badge_text} ${card.badge
                          .toLocaleLowerCase()
                          .replace(" ", "_")}`}
                      >
                        {card.badge === "popular"
                          ? "🔥"
                          : card.badge === "New house"
                          ? "🏡"
                          : card.badge === "Best Deals"
                          ? "💲"
                          : "✨"}{" "}
                        <span>&nbsp;</span>
                        {card.badge}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.card_content}>
                <h2 className={styles.name}>{card.name}</h2>
                <p className={styles.description}>{card.description}</p>
                <span className={styles.price}>$ {card.price}</span>
                <div className={styles.ownerinfo}>
                  <Avatar
                    className={styles.card_avatar}
                    alt="owner-photo"
                    src={card.owner.pic}
                  />
                  <div>
                    <h5 className={styles.owner_name}>{card.owner.name}</h5>
                    <span className={styles.owner_location}>
                      {card.owner.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HouseSlider;
