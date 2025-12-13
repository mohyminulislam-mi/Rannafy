import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaUser, FaMapMarkerAlt, FaUserShield, FaEdit } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Shared/Loading";
import { toast } from "react-toastify";

const MyProfile = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  console.log(user);

  const { data: getUser = {}, isLoading } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?email=${user?.email}`);
      return res.data;
    },
  });

  const handleRequest = async (type) => {
    const request = {
      userName: user?.displayName,
      userEmail: user?.email,
      requestType: type,
      requestStatus: "pending",
      requestTime: new Date(),
    };

    try {
      const res = await axiosSecure.post("/requests", request);

      if (res.status === 201) {
        toast.success(`(${type}) Request has been sent!`);
      }
    } catch (err) {
      if (err.response?.status === 409) {
        toast.error("Already requested!");
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">My Orders</h1>
      <div className="flex justify-center items-center pt-[12%] px-4">
        <div className="bg-white shadow-xl rounded-xl overflow-hidden w-full max-w-4xl flex flex-col lg:flex-row">
          {/* Sidebar */}
          <div className="bg-linear-to-b from-primary to-orange-600 text-white flex flex-col items-center p-6 lg:w-1/3 relative">
            <img
              src={getUser[0]?.photoURL || "https://via.placeholder.com/150"}
              alt="User"
              className="w-28 h-28 rounded-full border-4 border-white object-cover mb-4"
            />
            <h2 className="text-2xl font-bold">{getUser[0]?.displayName}</h2>
            <p className="text-sm opacity-80 wrap-break-word">
              {getUser[0]?.email}
            </p>
            <span className="mt-3 px-3 py-1 bg-white text-primary rounded-full text-xs font-semibold">
              {getUser[0]?.role.toUpperCase()}
            </span>
            <button className="btn-primary hover:text-black cursor-pointer absolute right-3">
              <FaEdit className="text-2xl" />
            </button>
          </div>

          {/* Details Section */}
          <div className="flex-1 p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">
              Profile Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <FaMapMarkerAlt className="text-primary" />{" "}
                {getUser[0]?.address || "No Address"}
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <FaUserShield className="text-primary" /> Status:{" "}
                <span
                  className={`font-semibold ${
                    getUser[0]?.userStatus === "active"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {getUser[0]?.userStatus}
                </span>
              </div>
              {getUser[0]?.role === "chef" && (
                <div className="flex items-center gap-2 text-gray-700">
                  <FaUser className="text-primary" /> Chef ID:{" "}
                  <span className="font-semibold">123456</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              {getUser[0]?.role !== "chef" && getUser[0]?.role !== "admin" && (
                <button
                  onClick={() => handleRequest("chef")}
                  className="px-4 py-2 cursor-pointer bg-primary text-white rounded-lg shadow hover:opacity-90 transition"
                >
                  Be a Chef
                </button>
              )}

              {getUser[0]?.role !== "admin" && (
                <button
                  onClick={() => handleRequest("admin")}
                  className="px-4 py-2 cursor-pointer bg-gray-800 text-white rounded-lg shadow hover:opacity-90 transition"
                >
                  Be an Admin
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
