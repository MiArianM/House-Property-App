import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
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
      <div className="swiper-button-next swiper-navBtn"></div>
      <div className="swiper-button-prev swiper-navBtn"></div>
      <div className="swiper-pagination"></div>
      <div className="slide-container swiper">
        <Swiper
          className="slide-content"
          slidesPerView={5}
          spaceBetween={1}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            0: { slidesPerView: 1 },
            750: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
            1300: { slidesPerView: 4 },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="card">
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="card-image">
                    <img
                      src={card.imageUrl}
                      alt="House-Image"
                      className="card-img"
                    />
                    {card.badge && (
                      <div className="badge">
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
                <div className="card-content">
                  <h2 className="name">{card.name}</h2>
                  <p className="description">{card.description}</p>
                  <span className="price">$ {card.price}</span>
                  <div className="ownerinfo">
                    <Avatar alt="Remy Sharp" src={card.owner.pic} />
                    <div>
                      <h5 className="owner_name">{card.owner.name}</h5>
                      <span className="owner_location">
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
    </>
  );
}
