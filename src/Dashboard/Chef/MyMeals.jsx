import React from "react";
import { useNavigate } from "react-router";

const MyMeals = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Meals</h1>
        <button
          onClick={() => navigate("/dashboard/create-meal")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add New
        </button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((meal) => (
          <div
            key={meal}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <div className="h-48 bg-linear-to-br from-purple-400 to-pink-500" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">My Meal {meal}</h3>
              <p className="text-gray-600 text-sm mb-3">
                Custom dish description
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-gray-800">
                  ${20 + meal}.99
                </span>
                <span className="text-sm text-green-600">24 orders</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                  Edit
                </button>
                <button className="flex-1 px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyMeals;
