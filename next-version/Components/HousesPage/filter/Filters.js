import React, { useContext } from "react";
import { UserContext } from "../../context";
import Dropdown from "./dropdown";
import { useRouter } from "next/router";

function Filters({ data: { selected, setSelected } }) {
  const router = useRouter();
  const { Hero_Styles } = useContext(UserContext);
  const generatePriceList = () => {
    const prices = ["0"];
    let currentPrice = 100000;
    let increment = 10000;

    while (currentPrice <= 100000000) {
      for (let i = 0; i < 10; i++) {
        prices.push(
          currentPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })
        );
        currentPrice += increment;
      }
      increment += 5000;
    }
    return prices;
  };

  const priceList = generatePriceList();
  const handleItemClick = (item, label) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, [label]: item },
    });
    setSelected((prevSelected) => {
      const updatedSelected = { ...prevSelected, [label]: item };
      const minPrice = parseInt(
        updatedSelected["Min price"]?.replace(/[^0-9]/g, ""),
        10
      );
      const maxPrice = parseInt(
        updatedSelected["Max price"]?.replace(/[^0-9]/g, ""),
        10
      );

      if (minPrice && maxPrice && minPrice > maxPrice) {
        const temp = updatedSelected["Min price"];
        updatedSelected["Min price"] = updatedSelected["Max price"];
        updatedSelected["Max price"] = temp;
      }
      if (label === "Min price" || label === "Max price") {
        updatedSelected.Price = `${updatedSelected["Min price"] || "max"} - ${
          updatedSelected["Max price"] || "min"
        }`;
      }
      updatedSelected["Min price"] > updatedSelected["Max price"] &&
        updatedSelected["Max price"] == 0;
      return updatedSelected;
    });
  };
  const renderFilterItem = (label, items) => (
    <div className={Hero_Styles.Filter_thing}>
      <label className={Hero_Styles.Filter_label}>{label}</label>
      <Dropdown label={label} selected={selected}>
        {label === "Price" ? (
          <div data-set="price" className={Hero_Styles.item_Price}>
            {renderFilterItem("Min price", priceList)}
            {renderFilterItem("Max price", priceList)}
          </div>
        ) : (
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
        )}
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
        {renderFilterItem("Price", [])}
        {renderFilterItem("Carport", ["Any", "1", "2", "3"])}
        {renderFilterItem("Per Page", ["10", "20", "30"])}
      </ul>
    </div>
  );
}

export default Filters;
