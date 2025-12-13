import React from "react";
import { Link } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { format } from "date-fns";

const MyOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(orders);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Orders</h1>
      <div className="grid gap-4">
        {orders.map((order) => (
          <div key={order._id} className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="font-semibold text-lg">{order.MealName}</h3>
                <p className=" text-gray-600">
                  {format(new Date(order.orderTime), "dd MMM yyyy, hh:mm a")}
                </p>
                <p className="text-sm text-gray-500 mt-1 mb-2">
                  {order.quantity} items • ${order.price}
                </p>
                <span
                  className={`px-4 py-2  rounded-full text-sm font-medium ${
                    order.orderStatus === "delivered"
                      ? "bg-green-100 text-green-700"
                      : order.orderStatus === "rejected"
                      ? "bg-red-300 text-red-800"
                      : "bg-yellow-300 text-yellow-800"
                  }`}
                >
                  {order.orderStatus}
                </span>
              </div>
              <div className={`px-4 py-2  rounded-full text-sm font-medium ${
                order.paymentStatus === "paid" ? (
                  "bg-green-100 text-green-700"
                ) : order.paymentStatus === "pending" ? (
                  "bg-yellow-300 text-yellow-800"
                ) : (
                  <Link to="/" className="bg-red-100 text-red-700">
                    pay
                  </Link>
                )
              }`}>
                {order.paymentStatus}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
