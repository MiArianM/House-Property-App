import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { testimonials } from "../../Data";
import { useMediaQuery } from "@mui/material";
function WhyUs({ Main_Styles }) {
  const matches = useMediaQuery("(max-width:655px)");
  return (
    <div className="Why-US">
      <div className="slide-cont">
        <div className="Title_info whyus">
          <div className="onTitle whyus">
            <hr className="onTitle_line" />
            <h1 className="onTitle_text whyus">Our Recommendation</h1>
            <h2 className="sec_info whyus">What Our User Say About Us</h2>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={56}
          direction={matches ? "vertical" : "horizontal"}
          centeredSlides={true}
          slidesPerView={matches ? 1 : 2}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
          className={Main_Styles.swiper_}
        >
          {testimonials.map((slide) => (
            <SwiperSlide className={Main_Styles.swiper_slide} key={slide.id}>
              <div className={Main_Styles.slide_}>
                <img
                  src={slide.imageUrl}
                  alt="Slide"
                  className={Main_Styles.slide_img}
                />
              </div>
              <div className={Main_Styles.slide_text}>
                <h3 className={Main_Styles.slide_title}>{slide.title}</h3>
                <p className={Main_Styles.slide_description}>
                  {slide.description}
                </p>
                <div className={Main_Styles.info_}>
                  <img
                    src={slide.author.avatar}
                    alt={slide.author.name}
                    className={Main_Styles.info_img}
                  />
                  <div>
                    <p className={Main_Styles.info_authorName}>
                      {slide.author.name}
                    </p>
                    <p className={Main_Styles.info_authorloc}>
                      {slide.author.title}
                    </p>
                  </div>
                  <div className={Main_Styles.rate_}>
                    <span className={Main_Styles.rate_icon}>★</span>
                    <span className={Main_Styles.rate_number}>
                      {slide.rating}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default WhyUs;
