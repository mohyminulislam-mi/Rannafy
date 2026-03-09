import React from "react";
import Hero from "./home/Hero.jsx";
import FeaturesSection from "./home/FeaturesSection.jsx";
import Testimonial from "./home/Testimonial.jsx";
import LatestMeals from "./home/LatestMeals.jsx";
import Methods from "./home/Methods.jsx";
import Newsletter from "./home/Newsletter.jsx";
import Partnership from "./home/Partnership.jsx";
import Blogs from "./home/Blogs.jsx";

const Home = () => {
  return (
    <section className="w-11/12 mx-auto min-h-screen">
      <Hero />
      <LatestMeals />
      <FeaturesSection />
      <Methods />
      <Partnership />
      <Testimonial />
      <Newsletter />
      <Blogs />
    </section>
  );
};

export default Home;
