import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Shared/Loading";
import MealsPopUp from "./MealsPopUp";
import MyMealCard from "./MyMealCard";

const MealCard = () => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: meals = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["meals", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/meals?email=${user?.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Meals</h1>
      {/* Meal Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {meals.map((meal) => (
          <MyMealCard
            key={meal._id}
            meal={meal}
            onUpdate={() => {
              setSelectedMeal(meal);
              setShowUpdateModal(true);
              refetch();
            }}
          />
        ))}
      </div>

      {/* Update Modal */}
      {showUpdateModal && selectedMeal && (
        <MealsPopUp
          setShowUpdateModal={setShowUpdateModal}
          meal={selectedMeal}
        />
      )}
    </>
  );
};

export default MealCard;
