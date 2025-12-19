import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/home/Home";
import Login from "../Pages/User-Authentication/Login";
import Registration from "../Pages/User-Authentication/Registration";
import Meals from "../Pages/Meals/Meals";
import MealDetails from "../Pages/Meals/MealDetails";
import Order from "../Pages/Order/Order";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyProfile from "../Dashboard/profile/MyProfile";
import MyOrders from "../Dashboard/User/MyOrders";
import MyReviews from "../Dashboard/User/MyReviews";
import FavoriteMeals from "../Dashboard/User/FavoriteMeals";
import MyMeals from "../Dashboard/Chef/MyMeals";
import OrderRequests from "../Dashboard/Chef/OrderRequests";
import CreateMeal from "../Dashboard/Chef/CreateMeal";
import PlatformStatistics from "../Dashboard/Admin/PlatformStatistics";
import ManageUsers from "../Dashboard/Admin/ManageUsers";
import ManageRequests from "../Dashboard/Admin/ManageRequests";
import PaymentSuccess from "../Dashboard/Payment/PaymentSuccess";
import PrivateRoutes from "../Routes/PrivateRoutes";
import AdminRoutes from "../Routes/AdminRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/meals", element: <Meals /> },
      { path: "/meals/:id", element: <PrivateRoutes><MealDetails /></PrivateRoutes> },
      { path: "/order/:id", element: <Order /> },
      { path: "/login", element: <Login /> },
      { path: "/registration", element: <Registration /> },
    ],
  },
  // Dashboard layout
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      { path: "/dashboard", element: <MyProfile /> },
      { path: "/dashboard/orders", element: <MyOrders /> },
      { path: "/dashboard/reviews", element: <MyReviews /> },
      { path: "/dashboard/favorites", element: <FavoriteMeals /> },
      { path: "/dashboard/my-meals", element: <MyMeals /> },
      { path: "/dashboard/order-requests", element: <OrderRequests /> },
      { path: "/dashboard/create-meal", element: <CreateMeal /> },
      { path: "/dashboard/payment-success", element: <PaymentSuccess /> },
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
    ],
  },
]);

export default router;
