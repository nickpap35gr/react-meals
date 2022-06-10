import React from "react";

import styles from "./Hero.module.css";

const Hero = (props) => {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles.hero}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
        <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
      </div>
    </section>
  );
};

export default Hero;
