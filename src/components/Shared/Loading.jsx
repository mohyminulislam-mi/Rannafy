import React from "react";

const Loading = () => {
  return (
    <div>
      {/* <div className="flex justify-center items-center h-64">
        <span className="loading loading-ring loading-lg text-primary"></span>
      </div> */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>
    </div>
  );
};

export default Loading;
