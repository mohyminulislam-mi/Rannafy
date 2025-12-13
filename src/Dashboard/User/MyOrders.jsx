import React from 'react';
import { Link } from 'react-router';

const MyOrders = () => {
    return (
       <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Orders</h1>
      <div className="grid gap-4">
        {[1, 2, 3].map((order) => (
          <div key={order} className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="font-semibold text-lg">Order #{1000 + order}</h3>
                <p className="text-gray-600">Placed on Dec {order}, 2024</p>
                <p className="text-sm text-gray-500 mt-1">3 items • $45.99</p>
              </div>
              <div>
                <span className="px-4 mr-2 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Delivered
              </span>
              <Link to='/' className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                pay
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default MyOrders;