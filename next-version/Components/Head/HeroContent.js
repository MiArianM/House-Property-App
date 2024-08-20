import React, { useContext } from "react";
import { UserContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
function HeroContent() {
  const styles = useContext(UserContext);
  return (
    <div className={styles.Hero_content}>
      <div className={styles.Hero_Title}>
        <div className={styles.Title}>
          <h3 className={styles.Title_Head}>
            find the place to live{" "}
            <span className={styles.Title_slogan}>your dreams </span>
            easily here
          </h3>
          <p className={styles.Title_paragraph}>
            Everything you need about finding your place to live will be here,
            where it will be easier for you
          </p>
        </div>
        <div className={styles.Search}>
          <img
            className={styles.Search_image}
            src="https://i.postimg.cc/XYNwMq4m/Search-Location.png"
          />
          <input
            placeholder="Search for the location!"
            className={styles.Search_input}
            type="text"
          />
          <button className={styles.Search_button}>
            Search &nbsp;
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className={styles.Partnership}>
          <span className={styles.Partnership__text}>Our Partnership</span>
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
  );
}

export default HeroContent;
