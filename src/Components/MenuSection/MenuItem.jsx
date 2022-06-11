import React from "react";

import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
  const addClickHandler = () => {
    props.onIncreaseAmount(props.dishName);
  };

  return (
    <React.Fragment>
      <li className={styles["list-item"]}>
        <div className={styles["item-description"]}>
          <h4>{props.dishName}</h4>
          <p>{props.dishDescription}</p>
          <span>{props.dishPrice}</span>
        </div>
        <div className={styles["item-add"]}>
          <div className={styles["item-add__amount"]}>
            <h4>Amount</h4>
            <input readOnly type="number" value={props.amount} />
          </div>
          <button onClick={addClickHandler}>{String.fromCharCode(43)}Add</button>
        </div>
      </li>
    </React.Fragment>
  );
};

export default MenuItem;
