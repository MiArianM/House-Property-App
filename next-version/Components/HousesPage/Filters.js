import React, { useContext, useState } from "react";
import { UserContext } from "../context";
import Dropdown from "./filter/dropdown";

function Filters() {
  const Hero_Styles = useContext(UserContext);
  const [selected, setSelected] = useState({
    "House Type": "All Houses",
    Width: "Any",
    Bedrooms: "Any",
    Carport: "Any",
    min_price: 0,
    max_price: Infinity,
    Price: [this?.min_price, this?.max_price] || "---",
  });
  const handleItemClick = (item, label) => {
    setSelected({ ...selected, [label]: item });
  };
  const renderFilterItem = (label, items) => (
    <div className={Hero_Styles.Filter_thing}>
      <label className={Hero_Styles.Filter_label}>{label}</label>
      <Dropdown label={label} selected={selected}>
        <ul className={Hero_Styles.type_list}>
          {items.map((item, index) => (
            <li
              key={index}
              className={Hero_Styles.type_item}
              onClick={() => handleItemClick(item, label)}
            >
              {item}
            </li>
          ))}
        </ul>
      </Dropdown>
    </div>
  );

  return (
    <div>
      <ul className={Hero_Styles.Filter_}>
        {renderFilterItem("House Type", ["All Houses", "Villas", "Apartments"])}
        {renderFilterItem("Width", [
          "Any",
          "50-100",
          "100-150",
          "150-200",
          "200-250",
          "250-300",
          "+300",
        ])}
        {renderFilterItem("Bedrooms", ["Any", "1", "2", "3", "+4"])}
        <div className={Hero_Styles.Filter_thing}>
          <label className={Hero_Styles.Filter_label}>Price</label>
          <Dropdown className={Hero_Styles.Filter_item}>
            <div data-set="price" className={Hero_Styles.item_Price}>
              {renderFilterItem("Min price", ["Min price"], "")}
              {renderFilterItem("Max price", ["Max price"], "")}
            </div>
          </Dropdown>
        </div>
        {renderFilterItem("Carport", ["Any", "1", "2", "3"])}
      </ul>
    </div>
  );
}

export default Filters;
