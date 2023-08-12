import "./App.css";
import React from "react";
import Navigation from "./components/Navigation/Navigation.js";
import Header from "./components/Header/Header.js";
import Experts from "./components/Experts/Experts";
import Offer from "./components/Offer/Offer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Experts />
      <Offer />
      <Footer />
    </>
  );
}

export default App;
