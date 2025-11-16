import React from 'react';

function Menu() {
  // Mock data
  const menuItems = [
    { id: 1, name: 'Pizza', price: 12, category: 'Main' },
    { id: 2, name: 'Coke', price: 2, category: 'Drink' },
    // Add more items
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Menu Items ({menuItems.length})</h1>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-4 text-left">ID</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Category</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map(item => (
            <tr key={item.id} className="border-t">
              <td className="p-4">{item.id}</td>
              <td className="p-4">{item.name}</td>
              <td className="p-4">${item.price}</td>
              <td className="p-4">{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Menu;
