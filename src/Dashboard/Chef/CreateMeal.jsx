import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router";

const CreateMeal = () => {
  const axiosSecure = useAxiosSecure();
  const { users } = useUser();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const toastId = toast.loading("Uploading image & saving meal...");
    try {
      const mealData = {
        chefEmail: users?.email,
        chefName: users?.displayName,
        chefId: users?.chefId,
        foodName: data.foodName,
        foodImage: data.photoURL,
        price: parseFloat(data.price),
        rating: Number(data.rating) || 0,
        ingredients: data.ingredients.split(",").map((i) => i.trim()),
        estimatedDeliveryTime: data.estimatedDeliveryTime,
        deliveryArea: data.deliveryArea,
        chefExperience: data.chefExperience,
      };

      // Save meal
      await axiosSecure.post("/meals", mealData);

      toast.success("Meal created successfully!");
      reset();
      navigate("/dashboard/my-meals");
    } catch (error) {
      toast.update(toastId, {
        render:
          error.response?.data?.message ||
          "You are a fraud user. You cannot add meals.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <title>Rannafy | Create your Meals</title>
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="lg:text-3xl text-2xl font-extrabold text-center text-primary mb-6">
          🍴 Create a New Meal
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Food Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Food Name
            </label>
            <input
              type="text"
              {...register("foodName", { required: true })}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
              placeholder="e.g. Grilled Chicken Salad"
            />
            {errors.foodName && (
              <p className="text-red-500 text-sm">Food name is required</p>
            )}
          </div>

          {/* Food Image URL */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Food Image URL
            </label>
            <input
              type="text"
              {...register("photoURL", { required: true })}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
              placeholder="https://example.com/image.jpg"
            />
            {errors.photoURL && (
              <p className="text-red-500">Image URL required</p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Price ($)
            </label>
            <input
              type="number"
              step="0.01"
              {...register("price", { required: true })}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
              placeholder="12.99"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Rating
            </label>
            <input
              type="number"
              {...register("rating")}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
              placeholder="0"
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Ingredients (comma separated)
            </label>
            <textarea
              {...register("ingredients", { required: true })}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
              placeholder="Chicken, Lettuce, Tomatoes..."
            />
          </div>

          {/* Estimated Delivery Time */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Estimated Delivery Time
            </label>
            <input
              type="text"
              {...register("estimatedDeliveryTime", { required: true })}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
              placeholder="30 minutes"
            />
          </div>

          {/* Delivery Area */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Delivery Area
            </label>
            <input
              type="text"
              {...register("deliveryArea", { required: true })}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
              placeholder="Dhanmondi"
            />
          </div>

          {/* Chef Experience */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Chef’s Experience
            </label>
            <input
              {...register("chefExperience", { required: true })}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
              placeholder="5 years of Mediterranean cuisine experience"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`btn ${
                loading
                  ? "bg-gray-600 mt-3 text-white py-2.5 px-3.5 rounded-sm transition-colors duration-200"
                  : "rannafy-btn"
              }`}
            >
              {loading ? "Saving..." : "Add Meal"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMeal;
