import React, { useState } from 'react';
import Sidebar from '../../components/DashBoard_Components/Sidebar';
import Dashboard from '../../components/DashBoard_Components/Dashboard';
import Users from '../../components/DashBoard_Components/Users';
import Orders from '../../components/DashBoard_Components/Orders';
import Menu from '../../components/DashBoard_Components/Menu';
import Staffs from '../../components/DashBoard_Components/Staffs';
import Inventory from '../../components/DashBoard_Components/Inventry';
import AdminReservation from '../../components/DashBoard_Components/Reservation';

function AdminDashBoard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'users': return <Users />;
      case 'orders': return <Orders />;
      case 'menu': return <Menu />;
      case 'staffs': return <Staffs />;
      case 'inventry': return <Inventory/>
      case 'allreservation': return <AdminReservation/>
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="flex-1 p-6">
        {renderContent()}
      </div>
    </div>
  );
}



export default AdminDashBoard