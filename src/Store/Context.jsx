import React, { useState } from "react";

const Context = React.createContext();

const menuItems = [
  { dishName: "Sushi", dishDescription: "Finest fish and veggies", dishPrice: "22.99", amount: 0 },
  { dishName: "Schnitzel", dishDescription: "A german specialty", dishPrice: "16.50", amount: 0 },
  { dishName: "Barbeque Burger", dishDescription: "American, raw, meaty", dishPrice: "12.99", amount: 0 },
  { dishName: "Green Bowl", dishDescription: "Healthy...and green...", dishPrice: "18.99", amount: 0 },
];

export const ContextProvider = (props) => {
  const [menu, setMenu] = useState(menuItems);

  const itemsInCart = menu.filter((dish) => dish.amount > 0);

  const totalItemsInCart = menu.reduce((prevDish, curDish) => {
    return prevDish + curDish.amount;
  }, 0);

  const onIncreaseAmountHandler = (item) => {
    setMenu((prevMenu) => {
      const newMenu = prevMenu.map((dish) => {
        if (dish.dishName === item) dish.amount++;

        return dish;
      });

      return newMenu;
    });
  };

  const onDecreaseAmountHandler = (item) => {
    setMenu((prevMenu) => {
      const newMenu = prevMenu.map((dish) => {
        if (dish.dishName === item) dish.amount--;

        return dish;
      });

      return newMenu;
    });
  };

  return <Context.Provider value={{ menu: menu, onIncreaseAmount: onIncreaseAmountHandler, onDecreaseAmount: onDecreaseAmountHandler, totalItemsInCart: totalItemsInCart, itemsInCart: itemsInCart }}>{props.children}</Context.Provider>;
};

export default Context;
