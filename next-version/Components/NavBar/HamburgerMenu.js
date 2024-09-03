import Link from "next/link";
import React, { useState } from "react";
function HamburgerMenu({ styles }) {
  const [menuopened, setMenuOpened] = useState(false);
  return (
    <>
      <Link className={styles.hamburger} href={"/"}>
        <div className={styles.Nav_Brand}>
          <img
            style={{ cursor: "pointer" }}
            src="https://i.postimg.cc/Hs9QPXDb/Brand.png"
          />
          <h2 className={styles.BrandName}>-V4 | House-App</h2>
        </div>
      </Link>
      <button
        onClick={() => setMenuOpened((menuopened) => !menuopened)}
        id={styles.burger}
        className={`${styles.open_main_nav} ${menuopened && styles.is_open}`}
      >
        <span className={styles.burger}></span>
        <span className={styles.burger_text}>Menu</span>
      </button>
      <nav
        className={`${styles.main_nav} ${menuopened && styles.is_open}`}
        id={styles.main_nav}
      >
        <ul>
          <li>
            <a href="#">Sign-Up!</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Article</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Property</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HamburgerMenu;
