import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { FaTrashAlt } from "react-icons/fa";

const FavoriteMeals = () => {
    const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: favorites = [] } = useQuery({
    queryKey: ["reviews", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/favorites?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Favorite Meals</h1>
      <div className="grid gap-4">
        {favorites.map((review) => (
          <div key={review} className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">
                  {review.mealName}
                </h3>
               
                <p className="text-gray-600">
                  {review.chefName} ({review.chefId})
                  </p>
                  
                <p className="text-sm text-gray-500 mt-1">
                  Date: {review.createdAt}
                  </p>
                  <p className="font-semibold mt-2">Price: ${review.price}</p>
              </div>
            </div>
            <div>
             
              <button className='btn bg-red-600 text-white'><FaTrashAlt /></button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteMeals;
