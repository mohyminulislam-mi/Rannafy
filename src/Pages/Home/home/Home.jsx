import React from "react";
import Hero from "../Hero";

import FeaturesSection from "../FeaturesSection";
import Testimonial from "../Testimonial.jsx";
import LatestMeals from "./LatestMeals.jsx";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <Hero />
      <LatestMeals />
      <FeaturesSection />
      <Testimonial />
    </div>
  );
};

export default Home;
