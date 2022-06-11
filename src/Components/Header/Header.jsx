import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";

import styles from "./Header.module.css";

import CartItemsList from "./CartItemsList";
import Context from "../../Store/Context";

const Backdrop = (props) => {
  return <div className={styles.backdrop}></div>;
};

const Modal = (props) => {
  return (
    <div className={styles.modal}>
      <CartItemsList />
      <div className={styles["row-1"]}>
        <h1 className={styles["amount"]}>Total Amount</h1>
        <span>${props.totalAmount.toFixed(2)}</span>
      </div>
      <div className={styles["row-2"]}>
        <button className={styles["close-btn"]} onClick={props.onClick}>
          close
        </button>
        <button className={styles["order-btn"]}>Order</button>
      </div>
    </div>
  );
};

const Overlay = (props) => {
  return (
    <React.Fragment>
      <Backdrop />
      <Modal onClick={props.onCloseButtonClick} totalAmount={props.totalAmount} />
    </React.Fragment>
  );
};

const Header = (props) => {
  const [isInCart, setIsInCart] = useState(false);

  const ctx = useContext(Context);

  const totalAmount = ctx.itemsInCart.reduce((prevItem, curItem) => {
    return prevItem + curItem.dishPrice * curItem.amount;
  }, 0);

  const onCartClickHandler = () => {
    setIsInCart(true);
  };

  const onCloseButtonClickHandler = () => {
    setIsInCart(false);
  };

  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button onClick={onCartClickHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          <p>Your Cart</p>
          <p>{ctx.totalItemsInCart}</p>
        </button>
      </header>
      <header className={styles["header-img"]}>
        <img src={require("../../images/meal.jpg")} alt="" />
      </header>
      {isInCart && ReactDOM.createPortal(<Overlay onCloseButtonClick={onCloseButtonClickHandler} totalAmount={totalAmount} />, document.getElementById("overlay-root"))}
    </React.Fragment>
  );
};

export default Header;
