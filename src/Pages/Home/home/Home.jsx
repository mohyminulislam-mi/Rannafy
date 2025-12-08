import React from "react";
import Hero from "../Hero";
import Meals from "../Meals/Meals";
import FeaturesSection from "../FeaturesSection";
import Testimonial from "../Testimonial.jsx";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto min-h-screen">
      <Hero />
      <Meals />
      <FeaturesSection />
      <Testimonial />
    </div>
  );
};

export default Home;
