// Simple DashBoard

// import React from "react";
// import { FiUsers, FiShoppingBag, FiDollarSign } from "react-icons/fi";

// import { useState, useEffect } from "react";

// import { useSelector, useDispatch } from "react-redux";
// import { fetchUsers } from "../../redux/slices/user.Slice";
// import { fetchOrders } from "../../redux/slices/order.Slice";


// function Dashboard() {

//   const disPatch = useDispatch();
//   const { users } = useSelector((state) => state.users);
//   const { orders } = useSelector((state) => state.orders);
  
//   // console.log(orders);
  
//   // Filtered Customer Role Users
//   const customer = users.filter(user => user.role === "customer");
    

// // Total revenue calculation only for 'served' or 'preparing' orders
// const totalRevenue = orders.reduce((sum, order) => {
  
//   if (order.status === "served" || order.status === "preparing") {
//     return sum + order.totalPrice;
//   }
//   return sum;
// }, 0);


  
//   useEffect(() => {
//      disPatch(fetchUsers());    
//      disPatch(fetchOrders());
//   }, [])


//   const cardStyle =
//     "bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition cursor-pointer";

//   return (
//     <div className="p-6 mt-10 md:mt-0">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard Overview</h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Total Users */}
//         <div className={cardStyle}>
//           <div className="flex items-center justify-between">
//             <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
//             <FiUsers className="text-blue-600 text-3xl" />
//           </div>
//           <p className="text-4xl font-bold mt-3 text-gray-900">
//             {customer.length}
//           </p>
//           <p className="text-sm text-gray-500 mt-1">Active members in system</p>
//         </div>

//         {/* Total Orders */}
//         <div className={cardStyle}>
//           <div className="flex items-center justify-between">
//             <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
//             <FiShoppingBag className="text-green-600 text-3xl" />
//           </div>
//           <p className="text-4xl font-bold mt-3 text-gray-900">
//             {orders.length}
//           </p>
//           <p className="text-sm text-gray-500 mt-1">Orders placed so far</p>
//         </div>

//         {/* Revenue */}
//         <div className={cardStyle}>
//           <div className="flex items-center justify-between">
//             <h3 className="text-lg font-semibold text-gray-700">Total Revenue</h3>
//             <FiDollarSign className="text-yellow-600 text-3xl" />
//           </div>
//           <p className="text-4xl font-bold mt-3 text-gray-900">
//             Rs.{totalRevenue}
//           </p>
//           <p className="text-sm text-gray-500 mt-1">Overall earnings</p>
//         </div>
//       </div>

//       {/* Mini Chart Placeholder */}
//       <div className="mt-10 bg-white p-6 rounded-xl shadow-md border">
//         <h2 className="text-xl font-semibold mb-3 text-gray-800">Sales Overview</h2>
//         <p className="text-gray-500">Charts/Graphs will be integrated here...</p>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;










// Stylish DashBoard
import React from "react";
import { FiUsers, FiShoppingBag, FiDollarSign, FiTrendingUp, FiClock, FiCheckCircle } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/slices/user.Slice";
import { fetchOrders } from "../../redux/slices/order.Slice";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'; // Assuming Recharts is installed

function Dashboard() {
  const disPatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const { orders } = useSelector((state) => state.orders);

  // Filtered Customer Role Users
  const customer = users.filter((user) => user.role === "customer");

  // Total revenue calculation only for 'served' or 'preparing' orders
  const totalRevenue = orders.reduce((sum, order) => {
    if (order.status === "served" || order.status === "preparing") {
      return sum + order.totalPrice;
    }
    return sum;
  }, 0);

  // Additional Stats
  const pendingOrders = orders.filter(order => order.status === "pending").length;
  const completedOrders = orders.filter(order => order.status === "served").length;
  const todayRevenue = orders
    .filter(order => {
      const today = new Date().toDateString();
      return new Date(order.createdAt).toDateString() === today && (order.status === "served" || order.status === "preparing");
    })
    .reduce((sum, order) => sum + order.totalPrice, 0);

  // Chart Data for Orders by Status
  const orderStatusData = [
    { name: 'Pending', value: pendingOrders, color: '#fbbf24' },
    { name: 'Preparing', value: orders.filter(o => o.status === 'preparing').length, color: '#f59e0b' },
    { name: 'Served', value: completedOrders, color: '#10b981' },
  ];

  // Sample Revenue Chart Data (last 7 days, placeholder)
  const revenueData = [
    { day: 'Mon', revenue: 1200 },
    { day: 'Tue', revenue: 1900 },
    { day: 'Wed', revenue: 800 },
    { day: 'Thu', revenue: 2100 },
    { day: 'Fri', revenue: 1600 },
    { day: 'Sat', revenue: 2500 },
    { day: 'Sun', revenue: 1800 },
  ];

  useEffect(() => {
    disPatch(fetchUsers());
    disPatch(fetchOrders());
  }, []);

  const cardStyle =
    "bg-gradient-to-r from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer";

  return (
    <div className="p-4 md:p-6 mt-10 md:mt-0 min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Dashboard Overview
        </h1>
        <p className="text-gray-600 text-lg">
          Welcome back! Here's a comprehensive summary of your restaurant's performance.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {/* Total Users */}
        <div className={`${cardStyle} from-blue-50 to-blue-100 border-blue-200`}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
              <p className="text-sm text-gray-500">Active members</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FiUsers className="text-blue-600 text-2xl" />
            </div>
          </div>
          <p className="text-4xl font-bold text-gray-900">{customer.length}</p>
        </div>

        {/* Total Orders */}
        <div className={`${cardStyle} from-green-50 to-green-100 border-green-200`}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
              <p className="text-sm text-gray-500">Orders placed</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <FiShoppingBag className="text-green-600 text-2xl" />
            </div>
          </div>
          <p className="text-4xl font-bold text-gray-900">{orders.length}</p>
        </div>

        {/* Revenue */}
        <div className={`${cardStyle} from-yellow-50 to-yellow-100 border-yellow-200`}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Total Revenue</h3>
              <p className="text-sm text-gray-500">Overall earnings</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <FiDollarSign className="text-yellow-600 text-2xl" />
            </div>
          </div>
          <p className="text-4xl font-bold text-gray-900">Rs.{totalRevenue}</p>
        </div>

        {/* Pending Orders */}
        <div className={`${cardStyle} from-red-50 to-red-100 border-red-200`}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Pending Orders</h3>
              <p className="text-sm text-gray-500">Awaiting action</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <FiClock className="text-red-600 text-2xl" />
            </div>
          </div>
          <p className="text-4xl font-bold text-gray-900">{pendingOrders}</p>
        </div>
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <div className="flex items-center mb-4">
            <FiTrendingUp className="text-purple-600 text-2xl mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Weekly Revenue</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip formatter={(value) => [`Rs.${value}`, 'Revenue']} />
              <Bar dataKey="revenue" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Order Status Pie Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <div className="flex items-center mb-4">
            <FiCheckCircle className="text-green-600 text-2xl mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Order Status</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={orderStatusData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {orderStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders and Today's Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Orders</h2>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {orders.slice(0, 5).map((order, index) => (
              <div key={order._id || index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">Order #{order._id ? order._id.slice(-6) : index + 1}</p>
                  <p className="text-sm text-gray-500">Status: {order.status}</p>
                </div>
                <p className="font-semibold text-gray-900">Rs.{order.totalPrice}</p>
              </div>
            ))}
            {orders.length === 0 && (
              <p className="text-gray-500 text-center py-4">No recent orders</p>
            )}
          </div>
          {orders.length > 5 && (
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              View All Orders
            </button>
          )}
        </div>

        {/* Today's Summary */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Today's Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Revenue Today:</span>
              <span className="font-bold text-gray-900">Rs.{todayRevenue}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Orders Completed:</span>
              <span className="font-bold text-gray-900">{completedOrders}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">New Users:</span>
              <span className="font-bold text-gray-900">{customer.length}</span> {/* Placeholder, adjust if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
