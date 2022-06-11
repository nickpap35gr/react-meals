import React, { useContext } from "react";

import Context from "../../Store/Context";
import CartItemsListItem from "./CartItemsListItem";

import styles from "./CartItemsList.module.css";

const CartItemsList = (props) => {
  const ctx = useContext(Context);

  const onAddClickHandler = (item) => {
    ctx.onIncreaseAmount(item);
  };

  const onRemoveClickHandler = (item) => {
    ctx.onDecreaseAmount(item);
  };

  let content = "";

  if (ctx.itemsInCart.length > 0) {
    content = (
      <ul className={styles["cart-list"]}>
        {ctx.itemsInCart.map((item) => {
          return <CartItemsListItem key={item.dishName} dishName={item.dishName} dishPrice={item.dishPrice} amount={item.amount} onAddClick={onAddClickHandler} onRemoveClick={onRemoveClickHandler} />;
        })}
      </ul>
    );
  }

  return <React.Fragment>{content}</React.Fragment>;
};

export default CartItemsList;
