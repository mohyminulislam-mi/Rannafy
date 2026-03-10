import { createBrowserRouter } from "react-router";
import React, { Suspense } from "react";
import PrivateRoutes from "./PrivateRoutes"
import ChefRoutes from "./ChefRoutes"
import AdminRoutes from "./AdminRoutes"
// Home pages
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Meals from "../Pages/Meals/Meals";
import Order from "../Pages/Order/Order";
import MealDetails from "../Pages/Meals/MealDetails";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/User-Authentication/Login";
import Registration from "../Pages/User-Authentication/Registration";
import ForgetPassword from "../Pages/User-Authentication/ForgetPassword";
import NotFound from "../components/NotFound";
import Loading from "../components/Shared/Loading";
// Dashboard Layout
const DashboardLayout = React.lazy(() => import("../Layouts/DashboardLayout"));
// User Pages
const MyProfile = React.lazy(() => import("../Dashboard/profile/MyProfile"));
const MyOrders = React.lazy(() => import("../Dashboard/User/MyOrders"));
const MyReviews = React.lazy(() => import("../Dashboard/User/MyReviews"));
const FavoriteMeals = React.lazy(() => import("../Dashboard/User/FavoriteMeals"));
// Chef Pages
const OrderRequests = React.lazy(() => import("../Dashboard/Chef/OrderRequests"));
const CreateMeal = React.lazy(() => import("../Dashboard/Chef/CreateMeal"));
const MyMeals = React.lazy(() => import("../Dashboard/Chef/MyMeals"));
// Admin Pages
const PlatformStatistics = React.lazy(() => import("../Dashboard/Admin/PlatformStatistics"));
const ManageUsers = React.lazy(() => import("../Dashboard/Admin/ManageUsers"));
const ManageRequests = React.lazy(() => import("../Dashboard/Admin/ManageRequests"));
// Payment
const PaymentSuccess = React.lazy(() => import("../Dashboard/Payment/PaymentSuccess"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/meals", element: <Meals /> },
      { path: "/meals/:id", element: <MealDetails /> },
      { path: "/order/:id", element: <Order /> },
      { path: "/login", element: <Login /> },
      { path: "/registration", element: <Registration /> },
      { path: "/forget-password", element: <ForgetPassword /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
    ],
  },
  // Dashboard layout
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<Loading />}>
        <PrivateRoutes>
          <DashboardLayout />
        </PrivateRoutes>
      </Suspense>
    ),
    children: [
      { path: "/dashboard", element: <MyProfile /> },
      { path: "/dashboard/orders", element: <MyOrders /> },
      { path: "/dashboard/reviews", element: <MyReviews /> },
      { path: "/dashboard/favorites", element: <FavoriteMeals /> },
      {
        path: "/dashboard/my-meals",
        element: (
          <ChefRoutes>
            <MyMeals />{" "}
          </ChefRoutes>
        ),
      },
      {
        path: "/dashboard/order-requests",
        element: (
          <ChefRoutes>
            <OrderRequests />{" "}
          </ChefRoutes>
        ),
      },
      {
        path: "/dashboard/create-meal",
        element: (
          <ChefRoutes>
            <CreateMeal />
          </ChefRoutes>
        ),
      },
      {
        path: "/dashboard/statistics",
        element: (
          <AdminRoutes>
            <PlatformStatistics />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/manage-users",
        element: (
          <AdminRoutes>
            <ManageUsers />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/manage-requests",
        element: (
          <AdminRoutes>
            <ManageRequests />
          </AdminRoutes>
        ),
      },
      { path: "/dashboard/payment-success", element: <PaymentSuccess /> },
    ],
  },
]);

export default router;
