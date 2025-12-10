import React, { useState } from "react";
import { FaStar, FaMapMarkerAlt, FaClock, FaUserTie } from "react-icons/fa";

const MealDetails = () => {
  const meal = {
    foodName: "Chicken Curry",
    chefName: "John Doe",
    chefId: "C101",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.k7knSQw4Y8b_8BeqpFVM8gHaEE?rs=1&pid=ImgDetMain&o=7&rm=3",
    price: 12,
    rating: 4.5,
    ingredients: ["Chicken", "Spices", "Onion", "Garlic"],
    deliveryArea: "Downtown",
    deliveryTime: "30 mins",
    chefExperience: 5,
  };

  const [reviews, setReviews] = useState([
    { id: 1, user: "Alice", comment: "Delicious and fresh!", rating: 5 },
    {
      id: 2,
      user: "Bob",
      comment: "Good taste but delivery was late.",
      rating: 3,
    },
  ]);
  const [newReview, setNewReview] = useState("");

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim() === "") return;
    const newEntry = {
      id: reviews.length + 1,
      user: "Guest",
      comment: newReview,
      rating: 4,
    };
    setReviews([...reviews, newEntry]);
    setNewReview("");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Food Image */}
      <img
        src={meal.image}
        alt={meal.foodName}
        className="w-full h-64 object-cover"
      />

      {/* Meal Info */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">{meal.foodName}</h2>
        <p className="text-gray-600">
          Chef: {meal.chefName} (ID: {meal.chefId})
        </p>

        <div className="mt-3 space-y-1">
          <p className="text-lg font-semibold text-green-600">
            Price: ${meal.price}
          </p>
          <p className="flex items-center text-yellow-500">
            <FaStar className="mr-1" /> Rating: {meal.rating}
          </p>
          <p className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-1" /> Delivery Area:{" "}
            {meal.deliveryArea}
          </p>
          <p className="flex items-center text-gray-600">
            <FaClock className="mr-1" /> Estimated Delivery: {meal.deliveryTime}
          </p>
          <p className="flex items-center text-gray-600">
            <FaUserTie className="mr-1" /> Chef Experience:{" "}
            {meal.chefExperience} years
          </p>
          <p className="text-gray-600">
            Ingredients: {meal.ingredients.join(", ")}
          </p>
        </div>

        {/* Order Button */}
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
          Order Now
        </button>
      </div>

      {/* Review Section */}
      <div className="p-6 border-t">
        <h3 className="text-xl font-semibold mb-3">Reviews</h3>
        <div className="space-y-2">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-100 p-3 rounded-md">
              <p className="font-semibold">{review.user}</p>
              <p className="text-gray-700">{review.comment}</p>
              <p className="text-yellow-500 flex items-center">
                <FaStar className="mr-1" /> {review.rating}
              </p>
            </div>
          ))}
        </div>

        {/* Add Review Form */}
        <form onSubmit={handleReviewSubmit} className="mt-4 flex">
          <input
            type="text"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write a review..."
            className="flex-1 border rounded-l-md px-3 py-2 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 rounded-r-md hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MealDetails;
