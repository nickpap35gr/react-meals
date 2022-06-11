import React, { useContext } from "react";

import Context from "../../Store/Context";

import styles from "./CartItemsList.module.css";

const CartItemsList = (props) => {
  const ctx = useContext(Context);
  let content = "";

  if (ctx.itemsInCart.length > 0) {
    content = (
      <ul className={styles["cart-list"]}>
        {ctx.itemsInCart.map((item) => {
          return (
            <li key={item.dishName} className={styles["cart-item"]}>
              <div className={styles["cart-item__info"]}>
                <p>{item.dishName}</p>
                <span>${item.dishPrice}</span>
                <span>x{item.amount}</span>
              </div>
              <div className={styles["cart-item__buttons"]}>
                <button>-</button>
                <button>+</button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  return <React.Fragment>{content}</React.Fragment>;
};

export default CartItemsList;
