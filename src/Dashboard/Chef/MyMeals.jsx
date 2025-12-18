import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Shared/Loading";
import MealsPopUp from "./MealsPopUp";
import { Star, Clock, Trash2, Edit, X, ChefHat } from "lucide-react";
import Swal from "sweetalert2";

const MealCard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const {
    data: meals = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["meals", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/meals?email=${user?.email}`);
      return res.data;
    },
  });
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This meal will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/meals/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your meal has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="mb-6 mt-7 lg:mt-0">
        <h1 className="text-3xl font-bold text-gray-800 ">My Meals</h1>
      </div>
      {/* Meal Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {meals.map((meal) => (
          <div
            key={meal._id}
            className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img
                src={meal.foodImage}
                alt={meal.foodName}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-md">
                <span className="text-lg font-bold text-gray-800">
                  ${meal.price}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5">
              {/* Title & Rating */}
              <div className="mb-3">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {meal.foodName}
                </h3>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < meal.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    ({meal.rating}/5)
                  </span>
                </div>
              </div>

              {/* Chef Info */}
              <div className="mb-3 flex items-center gap-2 text-sm">
                <ChefHat size={16} className="text-gray-600" />
                <div>
                  <p className="font-semibold text-gray-700">{meal.chefName}</p>
                  <p className="text-xs text-gray-500">
                    Chef ID: {meal.chefId}
                  </p>
                </div>
              </div>

              {/* Delivery Time */}
              <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                <Clock size={16} />
                <span>{meal.estimatedDeliveryTime}</span>
              </div>

              {/* Ingredients */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Ingredients:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {meal.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setSelectedMeal(meal);
                    setShowUpdateModal(true);
                  }}
                  className="flex items-center gap-2 flex-1 justify-center rannafy-btn "
                >
                  <Edit size={16} />
                  <span className="text-sm font-medium">Update</span>
                </button>
                <button
                  onClick={() => handleDelete(meal._id)}
                  className="flex items-center gap-2 flex-1 justify-center rannafy-delete-btn "
                >
                  <Trash2 size={16} />
                  <span className="text-sm font-medium">Delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Update Modal */}
      {showUpdateModal && (
        <MealsPopUp
          meal={selectedMeal}
          refetch={refetch}
          setShowUpdateModal={setShowUpdateModal}
        />
      )}
    </>
  );
};

export default MealCard;
