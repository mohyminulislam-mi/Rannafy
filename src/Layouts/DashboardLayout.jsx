import React, { useState } from "react";
import {
  Menu,
  X,
  User,
  ShoppingBag,
  Star,
  Heart,
  ChefHat,
  Plus,
  Package,
  Users,
  FileText,
  BarChart3,
  LogOut,
} from "lucide-react";
import MyProfile from "../Dashboard/User/MyProfile";
import MyOrders from "../Dashboard/User/MyOrders";
import MyReviews from "../Dashboard/User/MyReviews";
import FavoriteMeals from "../Dashboard/User/FavoriteMeals";
import MyMeals from "../Dashboard/Chef/MyMeals";
import OrderRequests from "../Dashboard/Chef/OrderRequests";
import CreateMeal from "../Dashboard/Chef/CreateMeal";

// Navigation Hook
const useNavigation = () => {
  const [currentPath, setCurrentPath] = useState("/dashboard/profile");

  const navigate = (path) => {
    setCurrentPath(path);
  };

  return { currentPath, navigate };
};

// App Component
export default function App() {
  const [user, setUser] = useState({ role: "user", name: "John Doe" });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { currentPath, navigate } = useNavigation();

  const userMenuItems = [
    { path: "/dashboard/profile", icon: User, label: "My Profile" },
    { path: "/dashboard/orders", icon: ShoppingBag, label: "My Orders" },
    { path: "/dashboard/reviews", icon: Star, label: "My Reviews" },
    { path: "/dashboard/favorites", icon: Heart, label: "Favorite Meals" },
  ];

  const chefMenuItems = [
    { path: "/dashboard/profile", icon: User, label: "My Profile" },
    { path: "/dashboard/create-meal", icon: Plus, label: "Create Meal" },
    { path: "/dashboard/my-meals", icon: ChefHat, label: "My Meals" },
    {
      path: "/dashboard/order-requests",
      icon: Package,
      label: "Order Requests",
    },
  ];

  const adminMenuItems = [
    { path: "/dashboard/profile", icon: User, label: "My Profile" },
    { path: "/dashboard/manage-users", icon: Users, label: "Manage Users" },
    {
      path: "/dashboard/manage-requests",
      icon: FileText,
      label: "Manage Requests",
    },
    {
      path: "/dashboard/statistics",
      icon: BarChart3,
      label: "Platform Statistics",
    },
  ];

  const getMenuItems = () => {
    switch (user.role) {
      case "chef":
        return chefMenuItems;
      case "admin":
        return adminMenuItems;
      default:
        return userMenuItems;
    }
  };

  const menuItems = getMenuItems();

  const handleRoleSwitch = (role) => {
    setUser({ ...user, role });
    setSidebarOpen(false);
    navigate("/dashboard/profile");
  };

  const handleNavigate = (path) => {
    navigate(path);
    setSidebarOpen(false);
  };

  // Page Components

  const ManageUsers = () => (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Users</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[1, 2, 3, 4].map((u) => (
                <tr key={u}>
                  <td className="px-6 py-4 whitespace-nowrap">User {u}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    user{u}@example.com
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                      User
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-blue-600 hover:underline mr-3">
                      Edit
                    </button>
                    <button className="text-red-600 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const ManageRequests = () => (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Requests</h1>
      <div className="grid gap-4">
        {[1, 2, 3].map((req) => (
          <div key={req} className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg">
                  Chef Application #{req}
                </h3>
                <p className="text-gray-600">From: Chef Candidate {req}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Submitted on Dec {req}, 2024
                </p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Approve
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const PlatformStatistics = () => (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Platform Statistics
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <Users className="text-blue-600" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">1,234</h3>
          <p className="text-gray-600">Total Users</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <ChefHat className="text-green-600" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">89</h3>
          <p className="text-gray-600">Active Chefs</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <ShoppingBag className="text-purple-600" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">5,678</h3>
          <p className="text-gray-600">Total Orders</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <BarChart3 className="text-orange-600" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">$45.2K</h3>
          <p className="text-gray-600">Revenue</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-3">
          {[1, 2, 3, 4].map((activity) => (
            <div
              key={activity}
              className="flex items-center justify-between py-3 border-b last:border-b-0"
            >
              <div>
                <p className="font-medium text-gray-800">New order placed</p>
                <p className="text-sm text-gray-500">{activity} hour ago</p>
              </div>
              <span className="text-green-600 font-semibold">+$25.99</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Render current page
  const renderPage = () => {
    switch (currentPath) {
      case "/dashboard/profile":
        return <MyProfile />;
      case "/dashboard/orders":
        return <MyOrders />;
      case "/dashboard/reviews":
        return <MyReviews />;
      case "/dashboard/favorites":
        return <FavoriteMeals />;
      case "/dashboard/create-meal":
        return <CreateMeal />;
      case "/dashboard/my-meals":
        return <MyMeals />;
      case "/dashboard/order-requests":
        return <OrderRequests />;
      case "/dashboard/manage-users":
        return <ManageUsers />;
      case "/dashboard/manage-requests":
        return <ManageRequests />;
      case "/dashboard/statistics":
        return <PlatformStatistics />;
      default:
        return <MyProfile />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm fixed top-0 left-0 right-0 z-20">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2">
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-30 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800">
              {user.role === "chef"
                ? "👨‍🍳 Chef"
                : user.role === "admin"
                ? "⚙️ Admin"
                : "🍽️ Food"}
            </h2>
            <p className="text-sm text-gray-500 mt-1">{user.name}</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPath === item.path;
                return (
                  <li key={item.path}>
                    <button
                      onClick={() => handleNavigate(item.path)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors w-full text-left ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Role Switcher (Demo) */}
          <div className="p-4 border-t">
            <p className="text-xs text-gray-500 mb-2">Switch Role (Demo):</p>
            <div className="flex gap-2">
              <button
                onClick={() => handleRoleSwitch("user")}
                className="px-3 py-1 text-xs bg-gray-100 rounded hover:bg-gray-200"
              >
                User
              </button>
              <button
                onClick={() => handleRoleSwitch("chef")}
                className="px-3 py-1 text-xs bg-gray-100 rounded hover:bg-gray-200"
              >
                Chef
              </button>
              <button
                onClick={() => handleRoleSwitch("admin")}
                className="px-3 py-1 text-xs bg-gray-100 rounded hover:bg-gray-200"
              >
                Admin
              </button>
            </div>
          </div>

          {/* Logout */}
          <div className="p-4 border-t">
            <button className="flex items-center gap-3 px-4 py-3 w-full text-red-600 hover:bg-red-50 rounded-lg transition-colors">
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 lg:pt-0 min-h-screen">
        <div className="p-4 lg:p-8">{renderPage()}</div>
      </main>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
