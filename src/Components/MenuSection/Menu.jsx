import React from "react";

import styles from "./Menu.module.css";

import MenuItem from "./MenuItem";

const Menu = (props) => {
  return (
    <section className={styles["menu-section"]}>
      <ul>
        <MenuItem />
      </ul>
    </section>
  );
};

export default Menu;
