import React from 'react';

function Orders() {
  // Mock data
  const orders = [
    { id: 1, customer: 'John Doe', items: 'Pizza, Coke', total: 25, status: 'Delivered' },
    { id: 2, customer: 'Jane Smith', items: 'Burger, Fries', total: 15, status: 'Pending' },
    // Add more orders
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Orders ({orders.length})</h1>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 text-left">ID</th>
            <th className="p-4 text-left">Customer</th>
            <th className="p-4 text-left">Items</th>
            <th className="p-4 text-left">Total</th>
            <th className="p-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="border-t">
              <td className="p-4">{order.id}</td>
              <td className="p-4">{order.customer}</td>
              <td className="p-4">{order.items}</td>
              <td className="p-4">${order.total}</td>
              <td className="p-4">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
