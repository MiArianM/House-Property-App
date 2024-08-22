import { useContext } from "react";
import { UserContext } from "../../context";
import { Trend_Houses } from "../../Data";
function TourRandomhouse() {
  const Main_Styles = useContext(UserContext);
  const touringHouse =
    Trend_Houses[Math.floor(Math.random() * Trend_Houses.length)];
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
          <div className={Main_Styles.TourHouse_info}>
            <h3 className={Main_Styles.TourHouse_title}>House Detail</h3>
            <div className="House-grid-container">
              <div className="grid-item">2</div>
              <div className="grid-item">1</div>
              <div className="grid-item">3</div>
              <div className="grid-item">4</div>
              <div className="grid-item">5</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TourRandomhouse;
