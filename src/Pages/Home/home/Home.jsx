import React from "react";
import Hero from "../Hero";
import Meals from "./Meals/Meals";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <Hero />
      <Meals />
    </div>
  );
};

export default Home;
