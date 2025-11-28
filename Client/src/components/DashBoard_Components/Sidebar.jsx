// import React from 'react';
// import { HomeIcon, UsersIcon, ClipboardListIcon, MenuIcon, UserAddIcon } from '@heroicons/react/outline';


// function Sidebar({ setActiveTab }) {

//   return (
//     <div className="w-64 bg-white shadow-lg">
//       <div className="p-4">
//         <h2 className="text-xl font-bold text-gray-800">Restaurant Admin</h2>
//       </div>
//       <nav className="mt-4">
//         <button onClick={() => setActiveTab('dashboard')} className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-200">
//           <HomeIcon className="w-5 h-5 mr-2" /> Dashboard
//         </button>
//         <button onClick={() => setActiveTab('users')} className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-200">
//           <UsersIcon className="w-5 h-5 mr-2" /> Users
//         </button>
//         <button onClick={() => setActiveTab('orders')} className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-200">
//           <ClipboardListIcon className="w-5 h-5 mr-2" /> Orders
//         </button>
//         <button onClick={() => setActiveTab('menu')} className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-200">
//           <MenuIcon className="w-5 h-5 mr-2" /> Menu
//         </button>
//         <button onClick={() => setActiveTab('staffs')} className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-200">
//           <UserAddIcon className="w-5 h-5 mr-2" /> Staff
//         </button>
//         {/* <button onClick={() => setActiveTab('inventry')} className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-200">
//           <UserAddIcon className="w-5 h-5 mr-2" /> Inventry
//         </button> */}
//         <button onClick={() => setActiveTab('allreservation')} className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-200">
//           <UserAddIcon className="w-5 h-5 mr-2" /> Reservation
//         </button>
//       </nav>
//     </div>
//   );
// }

// export default Sidebar;








import React, { useState } from 'react';
import { HomeIcon, UsersIcon, ClipboardListIcon, MenuIcon, UserAddIcon, XIcon } from '@heroicons/react/outline';

function Sidebar({ setActiveTab, activeTab }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { key: 'dashboard', label: 'Dashboard', icon: HomeIcon },
    { key: 'users', label: 'Users', icon: UsersIcon },
    { key: 'orders', label: 'Orders', icon: ClipboardListIcon },
    { key: 'menu', label: 'Menu', icon: MenuIcon },
    { key: 'staffs', label: 'Staff', icon: UserAddIcon },
    { key: 'allreservation', label: 'Reservation', icon: UserAddIcon },
  ];

  return (
    <>
      {/* Mobile Toggle Button - Hidden when sidebar is open */}
      <button
        onClick={toggleSidebar}
        className={`lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md shadow-md ${isOpen ? 'hidden' : ''}`}
        aria-label="Toggle Sidebar"
      >
        <MenuIcon className="w-6 h-6 z-50"/>
      </button>

      {/* Sidebar Overlay for Mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0  bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Restaurant Admin</h2>
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-1 text-gray-600 hover:text-gray-800"
            aria-label="Close Sidebar"
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => {
                  setActiveTab(item.key);
                  setIsOpen(false); // Close on mobile after selection
                }}
                className={`flex items-center w-full px-4 py-3 text-left transition-colors duration-200 ${
                  isActive
                    ? 'bg-blue-100 text-blue-700 border-r-4 border-blue-700'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}

export default Sidebar;

