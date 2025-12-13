import React from "react";

const ManageRequests = () => {
  return (
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
};

export default ManageRequests;
