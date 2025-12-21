import React from "react";
import logo from "/favicon.png";

const DashboardLogo = () => {
  return (
    <div className="flex items-center">
      <div>
        <img src={logo} alt="Logo" className="w-14 h-14" />
      </div>
      <div>
        <h1 className="text-xl  font-bold text-primary">RannaFy</h1>
        <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
      </div>
    </div>
  );
};

export default DashboardLogo;
