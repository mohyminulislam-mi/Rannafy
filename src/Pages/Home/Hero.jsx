import React from "react";
import { motion } from "framer-motion";
import hero from "../../assets/hero.png";
import { Link } from "react-router";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Background Image Container */}
      <div>
        <img src={hero} alt="hero" className="w-full h-auto object-cover" />
      </div>

      {/* content */}
      <motion.div
        className="absolute inset-0 flex items-end justify-start p-8 md:p-16 lg:p-20 xl:p-24"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Content Box */}
        <div className="max-w-xl text-white">
          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4"
            variants={itemVariants}
          >
            Your Kitchen <span className="text-orange-500">Companion</span>
            <br />
            for Every <span className="text-orange-500">Recipe</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-lg md:text-xl font-medium mb-8 text-gray-200"
            variants={itemVariants}
          >
            Explore curated recipes, read detailed instructions, and
            effortlessly manage your own cooking collection.
          </motion.p>

          {/* Action Button */}
          <motion.div variants={itemVariants}>
            <Link
              to="/"
              className="px-8 py-3 text-lg font-bold bg-orange-600 hover:bg-orange-700 text-white rounded-lg shadow-xl transition duration-300 ease-in-out"
            >
              Explore Meals
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
