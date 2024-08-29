import React, { useState, useRef, useContext } from "react";
import { UserContext } from "../../context";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Dropdown = ({ children, selected, label }) => {
  const Hero_Styles = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  console.log(selected);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  const handleclosingmenu = (e) => {
    if (e.target.localName === "li") {
      e.preventDefault();
    } else {
      e.target.parentElement.parentElement.parentElement.dataset.set ===
        "price" && e.stopPropagation();
      e.target.parentElement.parentElement.parentElement.parentElement.dataset
        .set === "price" && e.stopPropagation();
      e.target.parentElement.parentElement.parentElement.parentElement
        .parentElement.dataset.set === "price" && e.stopPropagation();
    }
  };
  React.useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);
  return (
    <div
      onClick={toggleDropdown}
      className={Hero_Styles.dropdown}
      ref={dropdownRef}
    >
      <button className={Hero_Styles.dropdown_toggle}>
        <span className={Hero_Styles.menu_title}>{selected?.[label]}</span>
        <FontAwesomeIcon
          className={`${Hero_Styles.drop_icon} ${
            isOpen && Hero_Styles.backIcon
          }`}
          icon={faChevronDown}
        />
      </button>

      <div
        className={`${Hero_Styles.dropdown_menu} ${
          !isOpen && Hero_Styles.hidden
        }`}
        onClick={(e) => {
          handleclosingmenu(e);
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
