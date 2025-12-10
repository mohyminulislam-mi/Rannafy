import React from "react";
import { MdOutlineStar } from "react-icons/md";

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
        <h2 className="text-lg font-semibold text-gray-800">{meal.foodName}</h2>

        {/* Food Info */}
        <p className="mt-2 text-gray-700 font-medium">Price: ${meal.price}</p>
        <p className="text-gray-600 flex items-center gap-1">
          Rating: <MdOutlineStar className="text-orange-500" /> {meal.rating}
        </p>
        <p className="text-gray-600">Delivery Area: {meal.deliveryArea}</p>

        {/* Chef Info */}
        <div className="my-2 p-2 bg-orange-50">
          <h2 className="text-lg font-semibold text-gray-800">
            Chef: {meal.chefName}
          </h2>
          <p className="text-sm text-gray-500">Chef ID: {meal.chefId}</p>
        </div>
        {/* See Details Button */}
        <button className="rannafy-btn w-full">See Details</button>
      </div>
    </div>
  );
};

export default MealCard;
