import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Shared/Loading";
import { useQuery } from "@tanstack/react-query";
import useUser from "../../hooks/useUser";
import { format } from "date-fns";
import Swal from "sweetalert2";

const OrderRequests = () => {
  const axiosSecure = useAxiosSecure();
  const { chefId } = useUser();

  const {
    data: chefOrders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["chefOrders", chefId],
    enabled: !!chefId,
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders?chefId=${chefId}`);
      return res.data;
    },
  });

  const handleOrder = (id, status) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Change order status to "${status}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Make it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/orders/${id}`, { status }).then((res) => {
          if (res.data.success) {
            refetch();

            Swal.fire({
              title: "Success!",
              text: "Order updated successfully",
              icon: "success",
            });
          }
        });
      }
    });
  };

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="mb-6 mt-7 lg:mt-0">
        <h1 className="text-3xl font-bold text-gray-800">Order Requests</h1>
      </div>

      <div className="grid gap-4">
        {chefOrders.map((order) => {
          const isPending = order.orderStatus === "pending";
          const isAccepted = order.orderStatus === "accepted";
          const isCancelled = order.orderStatus === "cancelled";
          const isDelivered = order.orderStatus === "delivered";

          return (
            <div key={order._id} className="bg-white rounded-lg shadow p-6">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                {/* Order info */}
                <div className="flex-1">
                  <h3 className="font-semibold text-2xl">{order.MealName}</h3>

                  <p className="text-sm font-semibold mt-1">
                    {order.quantity} items • ${order.price}
                  </p>
                  {/* order Status actons */}
                  <p className="text-sm mt-1">
                    Status:
                    <span
                      className={`ml-2 font-semibold ${
                        order.orderStatus === "delivered"
                          ? "rannafy-status-success"
                          : order.orderStatus === "rejected"
                          ? "rannafy-status"
                          : order.orderStatus === "cancelled"
                          ? "rannafy-status"
                          : "rannafy-pending"
                      }`}
                    >
                      {order.orderStatus}
                    </span>
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    Email: {order.userEmail}
                  </p>

                  <p className="text-sm mt-1">
                    Delivery address:
                    <span className="font-semibold ml-1">
                      {order.deliveryAddress}
                    </span>
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    {format(new Date(order.orderTime), "dd MMM yyyy, hh:mm a")}
                  </p>
                  {/* payment Status actions */}
                  <p className="text-sm mt-2">
                    Payment:
                    <span
                      className={`ml-2 font-semibold ${
                        order.paymentStatus === "paid"
                          ? "rannafy-status-success"
                          : order.paymentStatus === "cancelled"
                          ? "rannafy-status"
                          : "rannafy-pending"
                      }`}
                    >
                      {order.paymentStatus}
                    </span>
                  </p>
                </div>

                {/* actions buttons */}
                <div className="flex gap-2 self-center">
                  {/* Cancelled button */}
                  {isCancelled && (
                    <span className="rannafy-pending">Cancelled</span>
                  )}
                  {/* delivered text */}
                  {isDelivered && (
                    <span className="rannafy-status-success">
                      Order delivered
                    </span>
                  )}
                  {/* Accept / Pending */}
                  {!isCancelled && !isDelivered && (
                    <>
                      {/* Accept button*/}
                      {isAccepted ? (
                        <button disabled className="rannafy-pending">
                          Accepted
                        </button>
                      ) : (
                        <button
                          onClick={() => handleOrder(order._id, "accepted")}
                          className="rannafy-success"
                        >
                          Accept
                        </button>
                      )}

                      {/* Deliver button */}
                      <button
                        onClick={() => handleOrder(order._id, "delivered")}
                        className="rannafy-success"
                      >
                        Deliver
                      </button>

                      {/* Cancel (order not accepted) */}
                      {!isAccepted && (
                        <button
                          onClick={() => handleOrder(order._id, "cancelled")}
                          className="rannafy-status"
                        >
                          Cancel
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderRequests;
