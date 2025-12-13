import React from "react";

const CreateMeal = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Create New Meal</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meal Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Enter meal name"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg"
              rows="4"
              placeholder="Describe your meal"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="0.00"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select className="w-full px-4 py-2 border rounded-lg">
              <option>Italian</option>
              <option>Asian</option>
              <option>Mexican</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image
            </label>
            <input type="file" className="w-full px-4 py-2 border rounded-lg" />
          </div>
        </div>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Create Meal
        </button>
      </div>
    </div>
  );
};

export default CreateMeal;
