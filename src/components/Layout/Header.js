import React from "react";
import styles from './Header.module.css'
import Cart from "../Cart/Cart";

function Header(props) {
  return (
    <div className={styles.header}>
      <label className={styles.heading}>React Meals</label>
      <Cart/>
    </div>
  );
}

export default Header;
