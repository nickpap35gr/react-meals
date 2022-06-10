import React from "react";

import "./App.module.css";

import Header from "./Components/Header/Header.jsx";
import HeroSection from "./Components/HeroSection/HeroSection.jsx";

function App() {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
    </React.Fragment>
  );
}

export default App;
