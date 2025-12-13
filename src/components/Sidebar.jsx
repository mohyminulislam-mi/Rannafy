import React from "react";
import { NavLink } from "react-router";

const Sidebar = () => {
  // Mock role - In a real app, get this from your Auth context/store
  const userRole = "chef"; // options: 'user', 'chef', 'admin'

  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
      <li className="mb-4 text-2xl font-bold px-4 text-primary">MealMaster</li>

      {/* --- SHARED ROUTES --- */}
      <li>
        <NavLink to="/dashboard/profile">👤 My Profile</NavLink>
      </li>
      <div className="divider"></div>

      {/* --- USER ROUTES --- */}
      {userRole === "user" && (
        <>
          <li>
            <NavLink to="/dashboard/orders">📦 My Orders</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reviews">⭐ My Reviews</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/favorites">❤️ Favorite Meals</NavLink>
          </li>
        </>
      )}

      {/* --- CHEF ROUTES --- */}
      {userRole === "chef" && (
        <>
          <li>
            <NavLink to="/dashboard/create-meal">🍳 Create Meal</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-meals">🥗 My Meals</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/order-requests">🔔 Order Requests</NavLink>
          </li>
        </>
      )}

      {/* --- ADMIN ROUTES --- */}
      {userRole === "admin" && (
        <>
          <li>
            <NavLink to="/dashboard/manage-users">👥 Manage Users</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-requests">
              📥 Manage Requests
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/statistics">📈 Platform Statistics</NavLink>
          </li>
        </>
      )}

      <div className="mt-auto">
        <li>
          <NavLink to="/" className="text-error font-semibold">
            Logout
          </NavLink>
        </li>
      </div>
    </ul>
  );
};
export default Sidebar;
