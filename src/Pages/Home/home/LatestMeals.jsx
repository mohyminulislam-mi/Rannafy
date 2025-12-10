import React from "react";
import MealCard from "../../../components/MealCard";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const LatestMeals = () => {
  const axiosSecure = useAxiosSecure();
  const { data: meals = [] } = useQuery({
    queryKey: ["latest-meals"],
    queryFn: async () => {
      const res = await axiosSecure.get("latest-meals");
      return res.data;
    },
  });

  return (
    <div className="py-14 mt-14">
      {/* Heading & Subheading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
          Fresh & New
          <span className="text-orange-600"> Recipes</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Check out the latest creations from our amazing community of home
          cooks!
        </p>
      </div>
      {/* Meals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
        {meals.map((meal) => (
          <MealCard key={meal._id} meal={meal} />
        ))}
      </div>
      <div className="text-center">
        <Link to="/meals" className="rannafy-btn">
          View More
        </Link>
      </div>
    </div>
  );
};

export default LatestMeals;
