import React, { useEffect, useState } from "react";
import {
  FaStar,
  FaRegStar,
  FaMapMarkerAlt,
  FaClock,
  FaUserTie,
} from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { TbToolsKitchen3 } from "react-icons/tb";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import Loading from "../../components/Shared/Loading";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Rating from "react-rating";
import { toast } from "react-toastify";

const MealDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { user } = useAuth();
  const [rating, setRating] = useState(0);
  const [userReview, setUserReview] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: meal = [], isLoading } = useQuery({
    queryKey: ["meals", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/meal-details/${id}`);
      return res.data;
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewData = {
      mealId: meal._id,
      userName: user?.displayName,
      userEmail: user?.email,
      UserPhoto: user?.photoURL,
      text: userReview,
      rating: rating,
    };

    const res = await axiosSecure.post("/meals-reviews", reviewData);
    console.log(res.data);

    setUserReview("");
    setRating(0);
    toast.success("Thanks for sharing reviews");
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="max-w-9/12 mx-auto overflow-hidden">
      {/* Food Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src={meal.foodImage}
            alt={meal.foodName}
            className="w-full h-96 object-cover rounded-2xl"
          />
        </div>
        {/* Meal Info */}
        <div className="mt-2">
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
              <span className="text-primary ml-2 font-semibold">
                {meal.estimatedDeliveryTime}
              </span>
            </p>

            <p className="text-gray-600 flex">
              {" "}
              <TbToolsKitchen3 className="mt-0.5 mr-2 text-2xl text-primary" />{" "}
              Ingredients: {meal.ingredients}
            </p>
          </div>
          {/* chef information */}
          <div className="mt-5 bg-orange-50 py-2 px-1 rounded space-y-1">
            <p className="text-gray-600 flex items-center">
              <SiCodechef className="mr-2 text-2xl text-primary" />{" "}
              {meal.chefName}{" "}
              <span className="text-primary ml-2 font-semibold">
                ID: ({meal.chefId})
              </span>
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
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">Reviews</h3>
        <div className="space-y-2">
          <Tabs>
            {/* ==== TAB MENU ==== */}
            <TabList className="flex gap-3">
              <Tab
                selectedClassName="bg-red-600 text-white rounded px-4 py-1 cursor-pointer"
                className="bg-gray-200 px-4 py-1 rounded cursor-pointer"
              >
                Customer Reviews
              </Tab>

              <Tab
                selectedClassName="bg-red-600 text-white rounded px-4 py-1 cursor-pointer"
                className="bg-gray-200 px-4 py-1 rounded cursor-pointer"
              >
                Give Review
              </Tab>
            </TabList>

            {/* ==== TAB 1: CUSTOMER REVIEWS ==== */}
            <TabPanel>
              <div className="mt-5 space-y-3">
                {/* {reviews.map((r, idx) => (
                  <div key={idx} className="p-3 border rounded bg-gray-50">
                    <h4 className="font-semibold">{r.name}</h4>
                    <p>{r.text}</p>
                  </div>
                ))} */}
                Hello reviews
              </div>
            </TabPanel>

            {/* ==== TAB 2: REVIEW FORM ==== */}
            <TabPanel>
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                {/* Star Rating */}
                <div className="flex items-center gap-3">
                  <span className="font-semibold">Your Rating:</span>
                  <Rating
                    initialRating={rating}
                    onChange={(value) => setRating(value)}
                    emptySymbol={
                      <FaRegStar className="text-primary text-3xl" />
                    }
                    fullSymbol={<FaStar className="text-primary text-3xl" />}
                  />
                </div>

                {/* Input textarea */}
                <textarea
                  className="w-full border p-3 rounded"
                  rows="4"
                  placeholder="Write your review..."
                  value={userReview}
                  onChange={(e) => setUserReview(e.target.value)}
                />

                <button
                  type="submit"
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Submit Review
                </button>
              </form>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
