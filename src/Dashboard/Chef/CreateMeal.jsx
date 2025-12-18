import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router";

const CreateMeal = () => {
  const axiosSecure = useAxiosSecure();
  const { users } = useUser();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    toast.warning("Waiting a moments, dont click");
    try {
      //  image upload
      const profileImg = data.photo[0];
      const formData = new FormData();
      formData.append("image", profileImg);

      const imageApiUrl = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_image_host
      }`;

      const imgRes = await axiosSecure.post(imageApiUrl, formData);
      const photoURL = imgRes.data.data.url;

      //  meal data prepare
      const mealData = {
        chefEmail: users?.email,
        chefName: users?.displayName,
        chefId: users?.chefId,
        foodName: data.foodName,
        foodImage: photoURL,
        price: parseFloat(data.price),
        rating: Number(data.rating) || 0,
        ingredients: data.ingredients.split(",").map((i) => i.trim()),
        estimatedDeliveryTime: data.estimatedDeliveryTime,
        chefExperience: data.chefExperience,
        createdAt: new Date(),
      };

      // save meal to database
      await axiosSecure.post("/meals", mealData);
      toast.success("Meal created successfully!");
      reset();
      navigate("/dashboard/my-meals");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create meal. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="lg:text-3xl text-2xl font-extrabold text-center text-primary mb-6">
          🍴 Create a New Meal
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Chef Name */}
          {/* <div>
            <label className="block text-sm font-semibold text-gray-700">
              Chef Name
            </label>
            <input
              type="text"
              {...register("chefName", { required: true })}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
              placeholder="e.g. John Doe"
            />
          </div> */}
          {/* User Email */}
          {/* <div>
            <label className="block text-sm font-semibold text-gray-700">
              User Email
            </label>
            <input
              type="email"
              value={userEmail}
              readOnly
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm px-4 py-2 bg-gray-100 text-gray-600"
            />
          </div> */}
          {/* Chef ID */}
          {/* <div>
            <label className="block text-sm font-semibold text-gray-700">
              Chef ID
            </label>
            <input
              type="text"
              {...register("chefId", { required: true })}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
              placeholder="chef_123456"
            />
          </div> */}

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

          {/* Food Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Food Image
            </label>
            <input
              type="file"
              {...register("photo", { required: true })}
              className="file-input rounded-lg w-full mt-1"
            />
            {errors.photo && <p className="text-red-500">Photo required</p>}
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
              placeholder="Chicken breast, Lettuce, Tomatoes..."
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
            <button type="submit" className="rannafy-btn w-full">
              Submit Meal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMeal;
