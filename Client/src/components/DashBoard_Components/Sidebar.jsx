import React from 'react';
import { HomeIcon, UsersIcon, ClipboardListIcon, MenuIcon } from '@heroicons/react/outline';

function Sidebar({ setActiveTab }) {
  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">Restaurant Admin</h2>
      </div>
      <nav className="mt-4">
        <button onClick={() => setActiveTab('dashboard')} className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-200">
          <HomeIcon className="w-5 h-5 mr-2" /> Dashboard
        </button>
        <button onClick={() => setActiveTab('users')} className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-200">
          <UsersIcon className="w-5 h-5 mr-2" /> Users
        </button>
        <button onClick={() => setActiveTab('orders')} className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-200">
          <ClipboardListIcon className="w-5 h-5 mr-2" /> Orders
        </button>
        <button onClick={() => setActiveTab('menu')} className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-200">
          <MenuIcon className="w-5 h-5 mr-2" /> Menu
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;