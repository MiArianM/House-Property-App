import React from "react";
import styles from "../styles/HeroSection.module.css";

const navItems = [
  { id: 1, label: "About" },
  { id: 2, label: "Article" },
  { id: 3, label: "Property", hasDropdown: true },
];

const partnerships = [
  {
    id: 1,
    imgSrc: "../src/Partnership/traveloka1.png",
    link: "https://google.com",
  },
  {
    id: 2,
    imgSrc: "../src/Partnership/traveloka2.png",
    link: "https://google.com",
  },
  {
    id: 3,
    imgSrc: "../src/Partnership/traveloka3.png",
    link: "https://google.com",
  },
  {
    id: 4,
    imgSrc: "../src/Partnership/traveloka4.png",
    link: "https://google.com",
  },
];

const customerImages = [
  { id: 1, imgSrc: "../src/Services/person1.png" },
  { id: 2, imgSrc: "../src/Services/person2.png" },
  { id: 3, imgSrc: "../src/Services/person3.png" },
];

const HeroSection = () => {
  return (
    <>
      <div class="background-blur-1"></div>
      <div class="background-blur-2"></div>
      <div className={styles.container}>
        <div className={styles.backgroundBlur1}></div>
        <div className={styles.backgroundBlur2}></div>
        <section className={styles.hero}>
          <nav className={styles.heroNav}>
            <div className={styles.navBrand}>
              <img src="/src/Brand.png" alt="Brand Logo" />
              <h2 className={styles.brandName}>-V4 | House-App</h2>
            </div>
            <div className={styles.listAndUser}>
              <ul className={styles.navList}>
                {navItems.map((item) => (
                  <li key={item.id} className={styles.navItem}>
                    {item.label}{" "}
                    {item.hasDropdown && (
                      <i className="fa-solid fa-angle-down"></i>
                    )}
                  </li>
                ))}
              </ul>
              <a className={styles.navUser} href="https://github.com/MiarianM">
                Sign Up!
              </a>
            </div>
          </nav>
          <div className={styles.heroContent}>
            <div className={styles.heroTitle}>
              <div className={styles.title}>
                <h3 className={styles.titleHead}>
                  find the place to live{" "}
                  <span className={styles.titleSlogan}>your dreams</span> easily
                  here
                </h3>
                <p className={styles.titleParagraph}>
                  Everything you need about finding your place to live will be
                  here, where it will be easier for you
                </p>
              </div>
              <div className={styles.search}>
                <img
                  className={styles.searchImage}
                  src="/src/Search-Location.png"
                  alt="Search Location"
                />
                <input
                  placeholder="Search for the location you want!"
                  className={styles.searchInput}
                  type="text"
                />
                <button className={styles.searchButton}>
                  Search &nbsp;<i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
              <div className={styles.partnership}>
                <span className={styles.partnershipText}>Our Partnership</span>
                <ul className={styles.partnershipList}>
                  {partnerships.map((partner) => (
                    <li key={partner.id} className={styles.partnerships}>
                      <img
                        className={styles.partnershipsImage}
                        src={partner.imgSrc}
                        alt={`Partner ${partner.id}`}
                      />
                      <div className={styles.partnershipsDetails}>
                        <a href={partner.link}>Details</a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.heroIntroduction}>
              <img
                className={styles.heroImage}
                src="/src/Hero-Image.jpg"
                alt="Hero"
              />
              <div className={styles.heroServices}>
                <div className={styles.service}>
                  <div className={styles.serviceCustomers}>
                    {customerImages.map((customer) => (
                      <img
                        key={customer.id}
                        className={styles.customerImage}
                        src={customer.imgSrc}
                        alt={`Customer ${customer.id}`}
                      />
                    ))}
                  </div>
                  <div className={styles.serviceInformation}>
                    <h3 className={styles.informationTitle}>1K+ People</h3>
                    <p className={styles.informationDescription}>
                      Successfully Getting Home
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
