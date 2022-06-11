import React from "react";

import styles from "./CartItemsListItem.module.css";

const CartItemsListItem = (props) => {
  const onAddClickHandler = () => {
    props.onAddClick(props.dishName);
  };

  const onRemoveClickHandler = () => {
    props.onRemoveClick(props.dishName);
  };

  return (
    <li className={styles["cart-item"]}>
      <div className={styles["cart-item__info"]}>
        <p>{props.dishName}</p>
        <span>${props.dishPrice}</span>
        <span>x{props.amount}</span>
      </div>
      <div className={styles["cart-item__buttons"]}>
        <button onClick={onAddClickHandler}>+</button>
        <button onClick={onRemoveClickHandler}>-</button>
      </div>
    </li>
  );
};

export default CartItemsListItem;
