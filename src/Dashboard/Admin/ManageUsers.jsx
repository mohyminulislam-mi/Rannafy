import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Shared/Loading";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleMakeFraud = () => {
    alert("make fraud user");
  };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Users</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="my-th">
                  User
                </th>
                <th className="my-th">
                  Email
                </th>
                <th className="my-th">
                  Role
                </th>
                <th className="my-th">
                  Status
                </th>
                <th className="my-th">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {" "}
                    {user.displayName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p>
                      {user.role === "admin" ? (
                        <span className="rannafy-pending">
                          {user.role}
                        </span>
                      ) : user.role === "fraud" ? (
                        <span className="rannafy-status">
                          {user.role}
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                          {user.role}
                        </span>
                      )}
                    </p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span>
                      {user.userStatus === "active" ? (
                        <span className="rannafy-status-success">
                          {" "}
                          {user.userStatus}
                        </span>
                      ) : (
                        <span className="rannafy-status">
                          {" "}
                          {user.userStatus}
                        </span>
                      )}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.role === "admin" ? (
                      <span className="rannafy-pending">
                        Admin
                      </span>
                    ) : user.role === "fraud" ? (
                      <span className="rannafy-status">
                        fraud user
                      </span>
                    ) : (
                      <button
                        onClick={() => handleMakeFraud(user._id)}
                        className="rannafy-delete"
                      >
                        Make Fraud
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
