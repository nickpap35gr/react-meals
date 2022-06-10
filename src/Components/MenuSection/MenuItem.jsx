import React from "react";

import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  return (
    <li className={styles["list-item"]}>
      <div className={styles["item-description"]}>
        <h4>Sushi</h4>
        <p>Finest fish and veggies</p>
        <span>22.99</span>
      </div>
      <div className={styles["item-add"]}>
        <div className={styles["item-add__amount"]}>
          <h4>Amount</h4>
          <input readOnly type="number" placeholder="0" />
        </div>
        <button>{String.fromCharCode(43)}Add</button>
      </div>
    </li>
  );
};

export default MenuItem;
