import React from 'react';

function Dashboard() {
  // Mock data - replace with API calls
  const stats = {
    totalUsers: 150,
    totalOrders: 320,
    totalRevenue: 12500,
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-2xl">{stats.totalUsers}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Total Orders</h3>
          <p className="text-2xl">{stats.totalOrders}</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Total Revenue</h3>
          <p className="text-2xl">${stats.totalRevenue}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
