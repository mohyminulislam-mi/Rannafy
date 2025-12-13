import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open bg-base-200 min-h-screen">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Page Content */}
      <div className="drawer-content flex flex-col items-center justify-start p-6">
        {/* Mobile Navbar Toggle */}
        <div className="w-full flex justify-between lg:hidden mb-4">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </label>
          <h1 className="text-xl font-bold">MealMaster Dashboard</h1>
        </div>

        {/* Content Area */}
        <div className="w-full max-w-6xl">
          <Outlet />
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="drawer-side border-r border-base-300">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
