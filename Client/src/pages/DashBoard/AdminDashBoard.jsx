// import React, { useState } from 'react';
// import Sidebar from '../../components/DashBoard_Components/Sidebar';
// import Dashboard from '../../components/DashBoard_Components/Dashboard';
// import Users from '../../components/DashBoard_Components/Users';
// import Orders from '../../components/DashBoard_Components/Orders';
// import Menu from '../../components/DashBoard_Components/Menu';
// import Staffs from '../../components/DashBoard_Components/Staffs';
// import Inventory from '../../components/DashBoard_Components/Inventry';
// import AdminReservation from '../../components/DashBoard_Components/Reservation';

// function AdminDashBoard() {
//   const [activeTab, setActiveTab] = useState('dashboard');

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'dashboard': return <Dashboard />;
//       case 'users': return <Users />;
//       case 'orders': return <Orders />;
//       case 'menu': return <Menu />;
//       case 'staffs': return <Staffs />;
//       case 'inventry': return <Inventory/>
//       case 'allreservation': return <AdminReservation/>
//       default: return <Dashboard />;
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar setActiveTab={setActiveTab} />
//       <div className="flex-1 p-6">
//         {renderContent()}
//       </div>
//     </div>
//   );
// }



// export default AdminDashBoard







//  WIth Dark Mode
import React, { useState } from 'react';
import Sidebar from '../../components/DashBoard_Components/Sidebar';
import Dashboard from '../../components/DashBoard_Components/Dashboard';
import Users from '../../components/DashBoard_Components/Users';
import Orders from '../../components/DashBoard_Components/Orders';
import Menu from '../../components/DashBoard_Components/Menu';
import Staffs from '../../components/DashBoard_Components/Staffs';
import Inventory from '../../components/DashBoard_Components/Inventry';
import AdminReservation from '../../components/DashBoard_Components/Reservation';

import { useSelector } from "react-redux";

function AdminDashBoard() {

  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'users': return <Users />;
      case 'orders': return <Orders />;
      case 'menu': return <Menu />;
      case 'staffs': return <Staffs />;
      case 'inventry': return <Inventory />;
      case 'allreservation': return <AdminReservation />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className={`flex h-screen 
    ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}>
      <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="flex-1 p-6 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
}

export default AdminDashBoard;
