import { Star } from "lucide-react";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { FaRegEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const MyReviews = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/meals-reviews?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Reviews</h1>
      <div className="grid gap-4">
        {reviews.map((review) => (
          <div key={review} className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">
                  {review.mealName}
                </h3>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600">
                  {review.text}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Reviewed on Dec {review.createdAt}, 2024
                </p>
              </div>
            </div>
            <div>
              <button className='btn bg-green-500 text-white m-2'> <FaRegEdit /></button>
              <button className='btn bg-red-600 text-white'><FaTrashAlt /></button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
