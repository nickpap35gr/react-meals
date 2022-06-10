import React from "react";

import "./App.module.css";

import Header from "./Components/Header/Header.jsx";
import Hero from "./Components/HeroSection/Hero.jsx";
import Menu from "./Components/MenuSection/Menu.jsx";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Menu />
    </React.Fragment>
  );
}

export default App;
