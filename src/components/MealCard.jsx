import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { SiCodechef } from "react-icons/si";
import { Link } from "react-router";

const MealCard = ({ meal }) => {
  return (
    <div className="bg-white overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform">
      {/* Food Image */}
      <img
        src={meal.foodImage}
        alt={meal.name}
        className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
      />

      {/* Card Content */}
      <div className="p-4">
        {/* Chef Info */}
        <div className="mt-2">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <SiCodechef className="text-xl font-bold text-primary mr-1" /> {meal.chefName}
          </h2>
          <p className="text-sm text-gray-500">Chef ID: {meal.chefId}</p>
        </div>

        {/* Food Info */}
        <p className="mt-2 text-gray-700 font-medium">Price: ${meal.price}</p>
        <p className="text-gray-600 flex items-center gap-1">
          Rating: <MdOutlineStar className="text-orange-500" /> {meal.rating}
        </p>
        <p className="text-gray-600">Delivery Area: {meal.deliveryArea}</p>
        {/* See Details Button */}
        <div className="pb-4 mt-5">
          <Link to={`/meal-details/${meal._id}`} className="rannafy-btn w-full">
          See Details
        </Link>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
