// import React, { useEffect, useState } from "react";
// import axios from "axios";

// import { toast } from "react-toastify";

// function Orders() {
//   const token = localStorage.getItem("token");
//   const [orders, setOrders] = useState([]);
//   const [activeTab, setActiveTab] = useState("pending");

//   useEffect(() => {
//     fetchOrders();
//   }, []);


//   const fetchOrders = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/api/order/all", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setOrders(res.data.allOrders);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleStatus = async (id, status) => {
//     await axios.put(
//       `http://localhost:8000/api/order/update/${id}`,
//       { status },
//       { headers: { Authorization: `Bearer ${token}` } }
//     );
//     toast.success("Order updated successfully!");
//     fetchOrders();
//   };

//   const deleteOrder = async (id) => {
//     await axios.delete(`http://localhost:8000/api/order/delete/${id}`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     toast.success("Order deleted successfully!");
//     fetchOrders();
//   };

//   // Filter orders based on tab
//   const filteredOrders = orders.filter((o) => o.status === activeTab);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen mt-10 md:mt-0">

//       {/* 4 Simple Category Boxes */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

//         {/* Each box */}
//         {["pending", "preparing", "served", "cancelled"].map((status) => (
//           <div
//             key={status}
//             onClick={() => setActiveTab(status)}
//             className={`p-6 rounded-xl cursor-pointer text-center font-semibold text-lg shadow 
//               ${activeTab === status ? "bg-black text-white" : "bg-white text-gray-800"}
//             `}
//           >
//             {status.charAt(0).toUpperCase() + status.slice(1)}
//             <div className="text-sm mt-1 text-gray-500 font-normal">
//               ({orders.filter((o) => o.status === status).length})
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Selected Orders Cards */}
//       <h2 className="text-2xl font-bold mb-4 capitalize">{activeTab} Orders</h2>

//       <div className="grid gap-4">
//         {filteredOrders.length === 0 && (
//           <p className="text-gray-500">No orders found.</p>
//         )}

//         {filteredOrders.map((order) => {
//           const addr = JSON.parse(order.address);

//           // const addr  = order.address;


//           console.log("Address==>", addr);


//           return (
//             <div
//               key={order._id}
//               className="bg-white rounded-xl p-5 shadow border"
//             >
//               <h3 className="font-semibold text-gray-800 mb-2">
//                 Order #{order._id.slice(-5)}
//               </h3>

//               <p><strong>Name:</strong> {addr.fullName}</p>
//               <p><strong>Phone:</strong> {addr.phone}</p>
//               <p><strong>Address:</strong> {addr.address}</p>
//               <p><strong>City:</strong> {addr.city}</p>
//               <p><strong>Total:</strong> Rs. {order.totalPrice}</p>
//               <p><strong>Payment:</strong> {order.paymentType}</p>

//               <p className="mt-2 font-medium">Items:</p>
//               <ul className="list-disc ml-5 text-sm text-gray-600">
//                 {order.orderItems.map((item) => (
//                   <li key={item._id}>
//                     {item.menuitems?.name} × {item.quantity}
//                   </li>
//                 ))}
//               </ul>

//               {/* Actions */}
//               <div className="flex justify-between mt-4">

//                 <select
//                   className="border px-2 py-1 rounded"
//                   value={order.status}
//                   onChange={(e) =>
//                     handleStatus(order._id, e.target.value)
//                   }
//                 >
//                   <option value="pending">Pending</option>
//                   <option value="preparing">Preparing</option>
//                   <option value="served">Served</option>
//                   <option value="cancelled">Cancelled</option>
//                 </select>

//                 <button
//                   onClick={() => deleteOrder(order._id)}
//                   className="bg-red-500 text-white px-4 py-1 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>

//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Orders;














import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FiClock, FiLoader, FiCheckCircle, FiXCircle, FiMapPin, FiPhone, FiUser, FiCreditCard, FiTrash2 } from "react-icons/fi";

function Orders() {
  const token = localStorage.getItem("token");
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState("pending");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/order/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(res.data.allOrders);
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id, status) => {
    await axios.put(
      `http://localhost:8000/api/order/update/${id}`,
      { status },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    toast.success("Order updated successfully!");
    fetchOrders();
  };

  const deleteOrder = async (id) => {
    await axios.delete(`http://localhost:8000/api/order/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    toast.success("Order deleted successfully!");
    fetchOrders();
  };

  // Filter orders based on tab
  const filteredOrders = orders.filter((o) => o.status === activeTab);

  // Tab configurations with icons and colors
  const tabs = [
    { key: "pending", label: "Pending", icon: FiClock, color: "from-yellow-400 to-yellow-500", activeColor: "bg-yellow-600" },
    { key: "preparing", label: "Preparing", icon: FiLoader, color: "from-blue-400 to-blue-500", activeColor: "bg-blue-600" },
    { key: "served", label: "Served", icon: FiCheckCircle, color: "from-green-400 to-green-500", activeColor: "bg-green-600" },
    { key: "cancelled", label: "Cancelled", icon: FiXCircle, color: "from-red-400 to-red-500", activeColor: "bg-red-600" },
  ];

  return (
    <div className="p-4 md:p-6 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen mt-10 md:mt-0">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Orders Management</h1>
        <p className="text-gray-600 text-lg">Track and manage all your restaurant orders efficiently.</p>
      </div>

      {/* Status Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const count = orders.filter((o) => o.status === tab.key).length;
          const isActive = activeTab === tab.key;
          return (
            <div
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`p-6 rounded-2xl cursor-pointer text-center font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                isActive
                  ? `${tab.activeColor} text-white`
                  : `bg-gradient-to-r ${tab.color} text-white hover:opacity-90`
              }`}
            >
              <Icon className="mx-auto mb-2 text-3xl" />
              {tab.label}
              <div className="text-sm mt-1 opacity-90 font-normal">({count})</div>
            </div>
          );
        })}
      </div>

      {/* Selected Orders */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6 capitalize text-gray-800">
        {activeTab} Orders ({filteredOrders.length})
      </h2>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {filteredOrders.length === 0 && (
          <div className="col-span-full bg-white rounded-2xl p-8 shadow-lg text-center">
            <FiXCircle className="mx-auto text-6xl text-gray-400 mb-4" />
            <p className="text-gray-500 text-lg">No {activeTab} orders found.</p>
          </div>
        )}

        {filteredOrders.map((order) => {
          const addr = JSON.parse(order.address);

          return (
            <div
              key={order._id}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Order Header */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl text-gray-800">
                  Order #{order._id.slice(-5)}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  order.status === "pending" ? "bg-yellow-100 text-yellow-700" :
                  order.status === "preparing" ? "bg-blue-100 text-blue-700" :
                  order.status === "served" ? "bg-green-100 text-green-700" :
                  "bg-red-100 text-red-700"
                }`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>

              {/* Customer Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <FiUser className="text-gray-500 mr-2" />
                  <span className="text-gray-700"><strong>Name:</strong> {addr.fullName}</span>
                </div>
                <div className="flex items-center">
                  <FiPhone className="text-gray-500 mr-2" />
                  <span className="text-gray-700"><strong>Phone:</strong> {addr.phone}</span>
                </div>
                <div className="flex items-center md:col-span-2">
                  <FiMapPin className="text-gray-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Address:</strong> {addr.address}, {addr.city}</span>
                </div>
              </div>

              {/* Payment and Total */}
              <div className="flex justify-between items-center mb-4 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <FiCreditCard className="text-gray-500 mr-2" />
                  <span className="text-gray-700"><strong>Payment:</strong> {order.paymentType}</span>
                </div>
                <span className="text-2xl font-bold text-green-600">Rs. {order.totalPrice}</span>
              </div>

              {/* Order Items */}
              <div className="mb-4">
                <p className="font-semibold text-gray-800 mb-2">Items:</p>
                <ul className="space-y-1">
                  {order.orderItems.map((item) => (
                    <li key={item._id} className="flex justify-between text-sm text-gray-600 bg-gray-50 p-2 rounded">
                      <span>{item.menuitems?.name}</span>
                      <span>× {item.quantity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <select
                  className="flex-1 border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={order.status}
                  onChange={(e) => handleStatus(order._id, e.target.value)}
                >
                  <option value="pending">Pending</option>
                  <option value="preparing">Preparing</option>
                  <option value="served">Served</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                <button
                  onClick={() => deleteOrder(order._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition flex items-center justify-center"
                >
                  <FiTrash2 className="mr-2" />
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Orders;
