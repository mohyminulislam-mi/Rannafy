import React, { useEffect, useState } from "react";
import { FaStar, FaMapMarkerAlt, FaClock, FaUserTie } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { TbToolsKitchen3 } from "react-icons/tb";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

const MealDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: meal = [] } = useQuery({
    queryKey: ["meals", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/meal-details/${id}`);
      return res.data;
    },
  });

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
    <div className="max-w-9/12 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Food Image */}
      <div className="grid grid-cols-2">
        <div>
          <img
            src={meal.foodImage}
            alt={meal.foodName}
            className="w-full h-12/12 object-cover"
          />
        </div>
        {/* Meal Info */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{meal.foodName}</h2>

          <div className="mt-2 space-y-2">
            <p className="text-lg font-semibold text-primary">
              Price: ${meal.price}
            </p>
            <p className="flex items-center mt-3 text-yellow-500">
              <FaStar className="mr-2 text-primary" /> Rating: {meal.rating}
            </p>
            <p className="flex items-center text-gray-600">
              <FaMapMarkerAlt className="mr-2 text-primary" /> Delivery Area:{" "}
              {meal.deliveryArea}
            </p>
            <p className="flex items-center text-gray-600">
              <FaClock className="mr-2 text-primary" /> Estimated Delivery:{" "}
              <span className="text-primary ml-2 font-semibold">{meal.estimatedDeliveryTime}</span>
            </p>

            <p className="text-gray-600 flex"> <TbToolsKitchen3 className="mt-0.5 mr-2 text-2xl text-primary"/> Ingredients: {meal.ingredients}</p>
          </div>
          {/* chef information */}
          <div className="mt-5 bg-orange-50 py-2 px-1 rounded space-y-1">
            <p className="text-gray-600 flex items-center">
             
              <SiCodechef className="mr-2 text-2xl text-primary" /> {meal.chefName}  <span className="text-primary ml-2 font-semibold">ID: {meal.chefId}</span> 
            </p>
            <p className=" text-gray-600 ml-8">
               Chef Experience:{" "}
              <span className="font-semibold">{meal.chefExperience}</span>
            </p>
          </div>

          {/* Order Button */}
          <button className="mt-4 w-full bg-primary text-white py-2 rounded-md hover:bg-orange-600 transition-colors cursor-pointer">
            Order Now
          </button>
        </div>
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
            className="bg-primary text-white px-4 rounded-r-md hover:bg-orange-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MealDetails;
