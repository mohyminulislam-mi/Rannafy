import React from "react";
import { motion } from "framer-motion";
import hero from "../../../assets/hero.png";
import { Link } from "react-router";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section className="w-full">
      <div
        className="relative overflow-hidden rounded-2xl 
        h-[40vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh]"
      >
        {/* Background Image */}
        <img
          src={hero}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <motion.div
          className="relative z-10 flex h-full items-end sm:items-center
            px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28
            pb-8 sm:pb-0 mt-2 md:mt-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-xl text-white">
            <motion.h1
              variants={itemVariants}
              className="font-black leading-tight
                text-xl md:text-3xl lg:text-5xl xl:text-6xl
                mb-3 sm:mb-4"
            >
              Your Kitchen <span className="text-orange-500">Companion</span>
              <br />
              for Every <span className="text-orange-500">Recipe</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-medium
                text-gray-200 mb-4 lg:mb-6 sm:mb-5"
            >
              Explore curated recipes, read detailed instructions, and
              effortlessly manage your own cooking collection.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                to="/meals"
                className="inline-block
                  px-3 sm:px-3 py-2 sm:py-2
                  text-sm sm:text-base font-semibold lg:font-bold
                  bg-orange-600 hover:bg-orange-700
                  rounded-lg shadow-lg transition"
              >
                Explore Meals
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
