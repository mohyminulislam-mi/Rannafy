import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/home/Home";
import Login from "../Pages/User-Authentication/Login";
import Registration from "../Pages/User-Authentication/Registration";
import Meals from "../Pages/Meals/Meals";
import MealDetails from "../Pages/Meals/MealDetails";
import Order from "../Dashboard/Order/Order";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/meals", element: <Meals /> },
      { path: "/meals/:id", element: <MealDetails /> },
      { path: "/login", element: <Login /> },
      { path: "/registration", element: <Registration /> },
      { path: "/order/:id", element: <Order /> },
    ],
  },
  // Dashboard layout
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
  {
    path: "/dashboard-two",
    element: <Dashboard />,
  },
]);

export default router;
