import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/Hero/Hero.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Avatar from "@mui/material/Avatar";
export default function Home() {
  const cards = [
    {
      name: "Roselands House",
      description:
        "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
      imageUrl: "https://i.postimg.cc/yNchfbKt/pexels-pixabay-259588.jpg",
      price: "35.000.000",
      badge: "popular",
      owner: {
        pic: "https://i.postimg.cc/d0vd6MRf/pexels-italo-melo-881954-2379004.jpg",
        name: "Dianne Russell",
        location: "Manchester, Kentucky",
      },
    },
    {
      name: "Woodlandside",
      description:
        "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
      imageUrl: "https://i.postimg.cc/RZF4Qk7C/Pent-House.jpg",
      price: "20.000.000",
      badge: "New house",
      owner: {
        pic: "https://i.postimg.cc/zfPRPNK5/pexels-vanessa-garcia-6325964.jpg",
        name: "Robert Fox",
        location: "Dr. San Jose, South Dakota",
      },
    },
    {
      name: "The Old Lighthouse",
      description:
        "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
      imageUrl: "https://i.postimg.cc/s2W1dMT0/Villa1.jpg",
      price: "44.000.000",
      badge: "Best Deals",
      owner: {
        pic: "https://i.postimg.cc/QN7WSRtG/pexels-nswatzphoto-2770600.jpg",
        name: "Ronald Richards",
        location: "Santa Ana, Illinois",
      },
    },
    {
      name: "Cosmo's House",
      description:
        "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
      imageUrl: "https://i.postimg.cc/FR9KhBvz/pexels-athena-2972969.jpg",
      price: "17.000.000",
      badge: "popular",
      owner: {
        pic: "https://i.postimg.cc/rFCR2xxf/pexels-hazardos-3224949.jpg",
        name: "Jenny & Wilson",
        location: "Preston Rd. Inglewood, Maine 98380",
      },
    },
    {
      name: "Mohamed Yousef",
      description:
        "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
      imageUrl:
        "https://i.postimg.cc/6qP6L6v4/pexels-curtis-adams-1694007-3958958.jpg",
      price: "22.000.000",
      badge: "star",
      owner: {
        pic: "https://i.postimg.cc/7YznsgcJ/photo-1403-05-04-20-21-42.jpg",
        name: "Arian Pourhossein",
        location: "Farabi. Mardavij, Isfahan",
      },
    },
    {
      name: "Mohamed Yousef",
      description:
        "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
      imageUrl: "https://i.postimg.cc/R0vmtJDb/pexels-ibidsy-5524205.jpg",
      price: "54.000.000",
      badge: "star",
      owner: {
        pic: "https://i.postimg.cc/6qjgMC1m/pexels-jonaskakaroto-736230.jpg",
        name: "Anita Pourhossein",
        location: "Mosala, Isfahan, Iran",
      },
    },
    {
      name: "Mohamed Yousef",
      description:
        "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
      imageUrl:
        "https://i.postimg.cc/FKG4VstF/pexels-ethanwoophotography-19223900.jpg",
      price: "35.000.000",
      badge: "star",
      owner: {
        pic: "https://rockledgegardens.com/wp-content/uploads/hybrid-tea-rose-florida.jpg",
        name: "Manizhe Ahmadi",
        location: "Madani ST. Vavan, Tehran",
      },
    },
    {
      name: "Mohamed Yousef",
      description:
        "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
      imageUrl: "https://i.postimg.cc/TYycL91y/pexels-pixabay-280229.jpg",
      price: "68.000.000",
      badge: "star",
      owner: {
        pic: "https://cdn.shopify.com/s/files/1/0387/1460/5613/files/white-rose.jpg?v=1665759631",
        name: "Mojtaba Pourhossein",
        location: "Shohada ST. Lorestan, Iran",
      },
    },
    {
      name: "Mohamed Yousef",
      description:
        "The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.",
      imageUrl: "https://i.postimg.cc/FRM0jt77/pexels-pixabay-259950.jpg",
      price: "29.000.000",
      badge: "star",
      owner: {
        pic: "https://images.unsplash.com/photo-1711900922350-10523fb0b268?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHllbGxvdyUyMGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D",
        name: "Saeid kaviani",
        location: "Kermanshah",
      },
    },
  ];
  return (
    <>
      <div className={styles.background_blur1}></div>
      <div className={styles.background_blur2}></div>
      <div className="container">
        <section className="Hero">
          <nav className={styles.Hero_nav}>
            <div className={styles.Nav_Brand}>
              <img src="https://i.postimg.cc/Hs9QPXDb/Brand.png" />
              <h2 className={styles.BrandName}>-V4 | House-App</h2>
            </div>
            <div className={styles.ListAndUser}>
              <ul className={styles.Nav_List}>
                <li className={styles.Nav_item}>About</li>
                <li className={styles.Nav_item}>Article</li>
                <li className={styles.Nav_item}>Property</li>
              </ul>
              <a className={styles.Nav_User} href="github.com/MiarianM">
                Sign Up!
              </a>
            </div>
          </nav>
          <div className={styles.Burger_Menu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={styles.Hero_content}>
            <div className={styles.Hero_Title}>
              <div className={styles.Title}>
                <h3 className={styles.Title_Head}>
                  find the place to live{" "}
                  <span className={styles.Title_slogan}>your dreams </span>
                  easily here
                </h3>
                <p className={styles.Title_paragraph}>
                  Everything you need about finding your place to live will be
                  here, where it will be easier for you
                </p>
              </div>
              <div className={styles.Search}>
                <img
                  className={styles.Search_image}
                  src="https://i.postimg.cc/XYNwMq4m/Search-Location.png"
                />
                <input
                  placeholder="Search for the location you want!"
                  className={styles.Search_input}
                  type="text"
                />
                <button className={styles.Search_button}>
                  Search &nbsp;
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
              <div className={styles.Partnership}>
                <span className={styles.Partnership__text}>
                  Our Partnership
                </span>
                <ul className={styles.Partnership__list}>
                  <li className={styles.Partnerships}>
                    <img
                      className={styles.Partnerships_Image}
                      src="https://i.postimg.cc/yd0J3C70/traveloka1.png"
                    />
                    <div className={styles.Partnerships_Details}>
                      <a className={styles.complink} href="google.com">
                        Details
                      </a>
                    </div>
                  </li>
                  <li className={styles.Partnerships}>
                    <img
                      className={styles.Partnerships_Image}
                      src="https://i.postimg.cc/Y03h8NG9/traveloka2.png"
                    />
                    <div className={styles.Partnerships_Details}>
                      <a className={styles.complink} href="google.com">
                        Details
                      </a>
                    </div>
                  </li>
                  <li className={styles.Partnerships}>
                    <img
                      className={styles.Partnerships_Image}
                      src="https://i.postimg.cc/qq0N8D7S/traveloka3.png"
                    />
                    <div className={styles.Partnerships_Details}>
                      <a className={styles.complink} href="google.com">
                        Details
                      </a>
                    </div>
                  </li>
                  <li className={styles.Partnerships}>
                    <img
                      className={styles.Partnerships_Image}
                      src="https://i.postimg.cc/gcqXYpSW/traveloka4.png"
                    />
                    <div className={styles.Partnerships_Details}>
                      <a className={styles.complink} href="google.com">
                        Details
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.Hero_Introduction}>
              <img
                className={styles.Hero_Image}
                src="https://i.postimg.cc/Qd6cjDMt/Hero-Image.jpg"
              />
              <div className={styles.Hero_Services}>
                <div className={styles.Service}>
                  <div className={styles.Service_Customers}>
                    <img
                      className={styles.Customer_image}
                      src="https://i.postimg.cc/Gpyt6n86/person3.png"
                    />
                    <img
                      className={styles.Customer_image}
                      src="https://i.postimg.cc/rwbzhwmS/person2.png"
                    />
                    <img
                      className={styles.Customer_image}
                      src="https://i.postimg.cc/XYXpcCVj/person1.png"
                    />
                  </div>
                  <div className={styles.Service_information}>
                    <h3 className={styles.information_title}>1K+ People</h3>
                    <p className={styles.information_description}>
                      Successfully Getting Home
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`swiper_button_next ${styles.swiper_navBtn}`}></div>
          <div className={`swiper_button_prev ${styles.swiper_navBtn}`}></div>
          <div className={styles.swiper_pagination}></div>
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
              {cards.map((card, index) => (
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
                              className={`badge_text ${card.badge
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
                          <h5 className={styles.owner_name}>
                            {card.owner.name}
                          </h5>
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
        </section>
      </div>
    </>
  );
}
