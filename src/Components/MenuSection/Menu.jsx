import React, { useContext } from "react";

import styles from "./Menu.module.css";

import Context from "../../Store/Context";
import MenuItem from "./MenuItem";

const Menu = (props) => {
  const ctx = useContext(Context);

  return (
    <section className={styles["menu-section"]}>
      <ul>
        {ctx.menu.map((dish) => {
          return <MenuItem key={dish.dishName} dishName={dish.dishName} dishDescription={dish.dishDescription} dishPrice={dish.dishPrice} amount={dish.amount} onIncreaseAmount={ctx.onIncreaseAmount} />;
        })}
      </ul>
    </section>
  );
};

export default Menu;
