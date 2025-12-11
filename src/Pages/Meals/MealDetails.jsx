import React, { useEffect } from "react";
import { FaStar, FaRegStar, FaMapMarkerAlt, FaClock } from "react-icons/fa";
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
import { useForm, Controller } from "react-hook-form";

const MealDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { user } = useAuth();

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

  // get reviews data from database
  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["meals-reviews", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/meals-reviews/${id}`);
      return res.data;
    },
  });

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      text: "",
      rating: 0,
    },
  });

  const handleCustomerReviews = async (data) => {
    const reviewData = {
      mealId: meal._id,
      userName: user?.displayName,
      userEmail: user?.email,
      UserPhoto: user?.photoURL,
      text: data.text,
      rating: data.rating,
    };

    const res = await axiosSecure.post("/meals-reviews", reviewData);
    console.log(res.data);
    toast.success("Review submitted successfully!");
    refetch();
    reset();
  };

  const handleAddFavorite = async () => {
    const favoriteData = {
      mealId: meal._id,
      userEmail: user?.email,
      mealName: meal.foodName,
      chefName: meal.chefName,
      chefId: meal.chefId,
      price: meal.price,
    };
    const res = await axiosSecure.post("/favorites", favoriteData);
    console.log(res);
    toast.success("Add favorites successfully!");
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            <button className="mt-4 w-full rannafy-btn ">Order Now</button>
            <button
              className="mt-4 w-full rannafy-btn"
              onClick={handleAddFavorite}
            >
              Add Favorite
            </button>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">Reviews</h3>
        <div className="space-y-2">
          <Tabs>
            {/* Tab Menu */}
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

            {/* tab customer review */}
            <TabPanel>
              <div className="mt-5 space-y-3">
                {reviews.map((review, idx) => (
                  <div key={idx} className="p-3 rounded bg-orange-50">
                    <p>{review.text}</p>
                    <div className="grid grid-cols-2 gap-5">
                      <div> 
                        <img src={review.UserPhoto} alt="User" className="h-10 w-10 rounded-full" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{review.userName}</h4>
                        <span>{review.createdAt}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>

            {/* tab-2 review from */}
            <TabPanel>
              <form
                onSubmit={handleSubmit(handleCustomerReviews)}
                className="mt-5 space-y-4"
              >
                {/* Star Rating */}
                <div className="flex items-center gap-3">
                  <span className="font-semibold">Your Rating:</span>
                  <Controller
                    name="rating"
                    control={control}
                    rules={{ required: "Rating is required" }}
                    render={({ field }) => (
                      <Rating
                        initialRating={field.value}
                        onChange={field.onChange}
                        emptySymbol={
                          <FaRegStar className="text-primary text-3xl" />
                        }
                        fullSymbol={
                          <FaStar className="text-primary text-3xl" />
                        }
                      />
                    )}
                  />
                  {errors.rating && (
                    <p className="text-red-500 text-sm">
                      {errors.rating.message}
                    </p>
                  )}
                </div>

                {/* Input textarea */}
                <textarea
                  className="w-full border p-3 rounded"
                  rows="4"
                  placeholder="Write your review..."
                  {...register("text", { required: "Review text is required" })}
                />
                {errors.text && (
                  <p className="text-red-500 text-sm">{errors.text.message}</p>
                )}

                <button
                  type="submit"
                  className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer"
                >
                  Give Review
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
