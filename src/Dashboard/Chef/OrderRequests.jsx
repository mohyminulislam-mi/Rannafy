import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Shared/Loading";
import { useQuery } from "@tanstack/react-query";
import useChef from "../../hooks/useChef";

const OrderRequests = () => {
  const axiosSecure = useAxiosSecure();
  const { chefId } = useChef();
  
  const { data: chefOrders = {}, isLoading } = useQuery({
    queryKey: ["chefOrders", chefId],
    queryFn: async () => {
      const res = await axiosSecure.get(`orders?chefId=${chefId}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Order Requests</h1>
      <div className="grid gap-4">
        {chefOrders.map((order) => (
          <div key={order} className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg">Order #{2000 + order}</h3>
                <p className="text-gray-600">Customer: John Smith</p>
                <p className="text-sm text-gray-500 mt-1">2 items • $38.99</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Accept
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                  Decline
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderRequests;
