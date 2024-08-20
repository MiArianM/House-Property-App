import React, { useContext } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Avatar from "@mui/material/Avatar";
import { UserContext } from "../context";
import { Trend_Houses } from "../Data";
function HouseSlider() {
  const styles = useContext(UserContext);
  return (
    <div className={`${styles.slide_container}`}>
      <Swiper
        className={styles.slide_content}
        slidesPerView={5}
        modules={[Navigation, Pagination]}
        spaceBetween={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation
        breakpoints={{
          0: { slidesPerView: 1 },
          750: { slidesPerView: 2 },
          1100: { slidesPerView: 3 },
          1300: { slidesPerView: 4 },
        }}
      >
        {Trend_Houses.map((card, index) => (
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
