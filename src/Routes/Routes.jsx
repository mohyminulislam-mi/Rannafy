import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/home/Home";
import Login from "../Pages/User-Authentication/Login";
import Registration from "../Pages/User-Authentication/Registration";
import Meals from "../Pages/Meals/Meals";
import MealDetails from "../Pages/Meals/MealDetails";
import Contact from "../Pages/Contact/Contact";
import Order from "../Pages/Order/Order";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyProfile from "../Dashboard/profile/MyProfile";
import MyOrders from "../Dashboard/User/MyOrders";
import MyReviews from "../Dashboard/User/MyReviews";
import FavoriteMeals from "../Dashboard/User/FavoriteMeals";
import OrderRequests from "../Dashboard/Chef/OrderRequests";
import CreateMeal from "../Dashboard/Chef/CreateMeal";
import PlatformStatistics from "../Dashboard/Admin/PlatformStatistics";
import ManageUsers from "../Dashboard/Admin/ManageUsers";
import ManageRequests from "../Dashboard/Admin/ManageRequests";
import PaymentSuccess from "../Dashboard/Payment/PaymentSuccess";
import PrivateRoutes from "../Routes/PrivateRoutes";
import AdminRoutes from "../Routes/AdminRoutes";
import ChefRoutes from "../Routes/ChefRoutes";
import NotFound from "../components/NotFound";
import MyMeals from "../Dashboard/Chef/MyMeals";
import ForgetPassword from "../Pages/User-Authentication/ForgetPassword";
import About from "../Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/meals", element: <Meals /> },
      {
        path: "/meals/:id",
        element: <MealDetails />,
      },
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
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
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
