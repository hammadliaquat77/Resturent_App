// WithOut DarkMode

// import React, { useState } from 'react';
// import { HomeIcon, UsersIcon, ClipboardListIcon, MenuIcon, UserAddIcon, XIcon } from '@heroicons/react/outline';
// import { useSelector } from "react-redux";

// function Sidebar({ setActiveTab, activeTab }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => setIsOpen(!isOpen);

//   const darkMode = useSelector((state) => state.darkMode.darkMode);

//   const menuItems = [
//     { key: 'dashboard', label: 'Dashboard', icon: HomeIcon },
//     { key: 'users', label: 'Users', icon: UsersIcon },
//     { key: 'orders', label: 'Orders', icon: ClipboardListIcon },
//     { key: 'menu', label: 'Menu', icon: MenuIcon },
//     { key: 'staffs', label: 'Staff', icon: UserAddIcon },
//     { key: 'allreservation', label: 'Reservation', icon: UserAddIcon },
//   ];

//   return (
//     <>
//       {/* Mobile Toggle Button - Hidden when sidebar is open */}
//       <button
//         onClick={toggleSidebar}
//         className={`lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md shadow-md ${isOpen ? 'hidden' : ''}`}
//         aria-label="Toggle Sidebar"
//       >
//         <MenuIcon className="w-6 h-6 z-50"/>
//       </button>

//       <button
//         onClick={toggleSidebar}
//         className={`lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md shadow-md ${isOpen ? 'hidden' : ''}`}
//         aria-label="Toggle Sidebar"
//       >
//         <MenuIcon className="w-6 h-6 z-50"/>
//       </button>

//       {/* Sidebar Overlay for Mobile */}
//       {isOpen && (
//         <div
//           className="lg:hidden fixed inset-0  bg-opacity-50 z-40"
//           onClick={toggleSidebar}
//         ></div>
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed lg:static top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
//           isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
//         }`}
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between p-4 border-b border-gray-200">
//           <h2 className="text-xl font-bold text-gray-800">Restaurant Admin</h2>
//           <button
//             onClick={toggleSidebar}
//             className="lg:hidden p-1 text-gray-600 hover:text-gray-800"
//             aria-label="Close Sidebar"
//           >
//             <XIcon className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Navigation */}
//         <nav className="mt-4">
//           {menuItems.map((item) => {
//             const Icon = item.icon;
//             const isActive = activeTab === item.key;
//             return (
//               <button
//                 key={item.key}
//                 onClick={() => {
//                   setActiveTab(item.key);
//                   setIsOpen(false); // Close on mobile after selection
//                 }}
//                 className={`flex items-center w-full px-4 py-3 text-left transition-colors duration-200 ${
//                   isActive
//                     ? 'bg-blue-100 text-blue-700 border-r-4 border-blue-700'
//                     : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
//                 }`}
//               >
//                 <Icon className="w-5 h-5 mr-3" />
//                 {item.label}
//               </button>
//             );
//           })}
//         </nav>
//       </div>
//     </>
//   );
// }

// export default Sidebar;







//  Adding With DarkMode

import React, { useState } from 'react';
import { HomeIcon, UsersIcon, ClipboardListIcon, MenuIcon, UserAddIcon, XIcon } from '@heroicons/react/outline';
import { useSelector } from "react-redux";

function Sidebar({ setActiveTab, activeTab }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const darkMode = useSelector((state) => state.darkMode.darkMode);

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
      {/* MOBILE Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md shadow-md ${
          darkMode ? "bg-gray-700 text-white" : "bg-gray-800 text-white"
        } ${isOpen ? 'hidden' : ''}`}
        aria-label="Toggle Sidebar"
      >
        <MenuIcon className="w-6 h-6" />
      </button>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          // className="lg:hidden fixed inset-0 bg-black bg-opacity-40 z-40"
          className="lg:hidden fixed inset-0  z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* SIDEBAR */}
      <div
        className={`fixed lg:static top-0 left-0 h-full w-64 transform transition-transform duration-300 ease-in-out z-50 shadow-lg ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      >

        {/* HEADER */}
        <div
          className={`flex items-center justify-between p-4 border-b ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <h2 className="text-xl font-bold cursor-no-drop">
            Restaurant Admin
          </h2>

          <button
            onClick={toggleSidebar}
            className="lg:hidden p-1"
            aria-label="Close Sidebar" 
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        {/* NAVIGATION */}
        <nav className="mt-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.key;

            return (
              <button
                key={item.key}
                onClick={() => {
                  setActiveTab(item.key);
                  setIsOpen(false); // close on mobile
                }}
                className={`flex items-center cursor-pointer w-full px-4 py-3 text-left transition-all duration-200
                  ${
                    isActive
                      ? darkMode
                        ? "bg-gray-700 text-white border-r-4 border-green-500"
                        : "bg-blue-100 text-blue-700 border-r-4 border-blue-700"
                      : darkMode
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-700 hover:bg-gray-100"
                  }
                `}
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
