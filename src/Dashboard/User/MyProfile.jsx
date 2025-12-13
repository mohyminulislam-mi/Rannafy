import React from "react";
import { User } from "lucide-react";

const MyProfile = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
            <User size={48} className="text-blue-600" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Mohyminul</h2>
            <p className="text-gray-600 capitalize">Role</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg"
              defaultValue="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              className="w-full px-4 py-2 border rounded-lg"
              defaultValue="+1234567890"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg"
              rows="3"
              defaultValue="123 Main St, City, State 12345"
            />
          </div>
        </div>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
