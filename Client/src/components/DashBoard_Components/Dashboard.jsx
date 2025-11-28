import React from "react";
import { FiUsers, FiShoppingBag, FiDollarSign } from "react-icons/fi";

import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/slices/user.Slice";
import { fetchOrders } from "../../redux/slices/order.Slice";


function Dashboard() {

  const disPatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const { orders } = useSelector((state) => state.orders);
  
  // console.log(orders);
  
  // Filtered Customer Role Users
  const customer = users.filter(user => user.role === "customer");
    

// Total revenue calculation only for 'served' or 'preparing' orders
const totalRevenue = orders.reduce((sum, order) => {
  
  if (order.status === "served" || order.status === "preparing") {
    return sum + order.totalPrice;
  }
  return sum;
}, 0);


  
  useEffect(() => {
     disPatch(fetchUsers());    
     disPatch(fetchOrders());
  }, [])


  const cardStyle =
    "bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition cursor-pointer";

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Users */}
        <div className={cardStyle}>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
            <FiUsers className="text-blue-600 text-3xl" />
          </div>
          <p className="text-4xl font-bold mt-3 text-gray-900">
            {customer.length}
          </p>
          <p className="text-sm text-gray-500 mt-1">Active members in system</p>
        </div>

        {/* Total Orders */}
        <div className={cardStyle}>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
            <FiShoppingBag className="text-green-600 text-3xl" />
          </div>
          <p className="text-4xl font-bold mt-3 text-gray-900">
            {orders.length}
          </p>
          <p className="text-sm text-gray-500 mt-1">Orders placed so far</p>
        </div>

        {/* Revenue */}
        <div className={cardStyle}>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-700">Total Revenue</h3>
            <FiDollarSign className="text-yellow-600 text-3xl" />
          </div>
          <p className="text-4xl font-bold mt-3 text-gray-900">
            Rs.{totalRevenue}
          </p>
          <p className="text-sm text-gray-500 mt-1">Overall earnings</p>
        </div>
      </div>

      {/* Mini Chart Placeholder */}
      <div className="mt-10 bg-white p-6 rounded-xl shadow-md border">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">Sales Overview</h2>
        <p className="text-gray-500">Charts/Graphs will be integrated here...</p>
      </div>
    </div>
  );
}

export default Dashboard;
