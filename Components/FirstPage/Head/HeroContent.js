import React, { useContext } from "react";
import { UserContext } from "../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
function HeroContent() {
  const Hero_Styles = useContext(UserContext);
  return (
    <div className={Hero_Styles.Hero_content}>
      <div className={Hero_Styles.Hero_Title}>
        <div className={Hero_Styles.Title}>
          <h3 className={Hero_Styles.Title_Head}>
            find the place to live{" "}
            <span className={Hero_Styles.Title_slogan}>your dreams </span>
            easily here
          </h3>
          <p className={Hero_Styles.Title_paragraph}>
            Everything you need about finding your place to live will be here,
            where it will be easier for you
          </p>
        </div>
        <div className={Hero_Styles.Search}>
          <img
            className={Hero_Styles.Search_image}
            src="https://i.postimg.cc/XYNwMq4m/Search-Location.png"
          />
          <input
            placeholder="Search for the location!"
            className={Hero_Styles.Search_input}
            type="text"
          />
          <button className={Hero_Styles.Search_button}>
            Search &nbsp;
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className={Hero_Styles.Partnership}>
          <span className={Hero_Styles.Partnership__text}>Our Partnership</span>
          <ul className={Hero_Styles.Partnership__list}>
            <li className={Hero_Styles.Partnerships}>
              <img
                className={Hero_Styles.Partnerships_Image}
                src="https://i.postimg.cc/yd0J3C70/traveloka1.png"
              />
              <div className={Hero_Styles.Partnerships_Details}>
                <a className={Hero_Styles.complink} href="google.com">
                  Details
                </a>
              </div>
            </li>
            <li className={Hero_Styles.Partnerships}>
              <img
                className={Hero_Styles.Partnerships_Image}
                src="https://i.postimg.cc/Y03h8NG9/traveloka2.png"
              />
              <div className={Hero_Styles.Partnerships_Details}>
                <a className={Hero_Styles.complink} href="google.com">
                  Details
                </a>
              </div>
            </li>
            <li className={Hero_Styles.Partnerships}>
              <img
                className={Hero_Styles.Partnerships_Image}
                src="https://i.postimg.cc/qq0N8D7S/traveloka3.png"
              />
              <div className={Hero_Styles.Partnerships_Details}>
                <a className={Hero_Styles.complink} href="google.com">
                  Details
                </a>
              </div>
            </li>
            <li className={Hero_Styles.Partnerships}>
              <img
                className={Hero_Styles.Partnerships_Image}
                src="https://i.postimg.cc/gcqXYpSW/traveloka4.png"
              />
              <div className={Hero_Styles.Partnerships_Details}>
                <a className={Hero_Styles.complink} href="google.com">
                  Details
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={Hero_Styles.Hero_Introduction}>
        <img
          className={Hero_Styles.Hero_Image}
          src="https://i.postimg.cc/Qd6cjDMt/Hero-Image.jpg"
        />
        <div className={Hero_Styles.Hero_Services}>
          <div className={Hero_Styles.Service}>
            <div className={Hero_Styles.Service_Customers}>
              <img
                className={Hero_Styles.Customer_image}
                src="https://i.postimg.cc/Gpyt6n86/person3.png"
              />
              <img
                className={Hero_Styles.Customer_image}
                src="https://i.postimg.cc/rwbzhwmS/person2.png"
              />
              <img
                className={Hero_Styles.Customer_image}
                src="https://i.postimg.cc/XYXpcCVj/person1.png"
              />
            </div>
            <div className={Hero_Styles.Service_information}>
              <h3 className={Hero_Styles.information_title}>1K+ People</h3>
              <p className={Hero_Styles.information_description}>
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
