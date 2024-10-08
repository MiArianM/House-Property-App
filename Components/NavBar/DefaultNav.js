import Link from "next/link";
import React from "react";
function DefaultNav({ styles }) {
  return (
    <>
      <nav className={styles.Hero_nav}>
        <Link href={"/"}>
          <div className={styles.Nav_Brand}>
            <img
              style={{ cursor: "pointer" }}
              src="https://i.postimg.cc/Hs9QPXDb/Brand.png"
            />
            <h2 className={styles.BrandName}>-V4 | House-App</h2>
          </div>
        </Link>
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
    </>
  );
}

export default DefaultNav;
