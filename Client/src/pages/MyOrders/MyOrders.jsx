// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import { toast } from "react-toastify";

// function MyOrders() {
//   const token = localStorage.getItem("token"); // user token
//   const [orders, setOrders] = useState([]);

//   // Fetch user orders
//   const fetchOrders = async () => {
//     try {
//       const res = await axios.get("http://localhost:8000/api/order/my", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       console.log(res.data.myOrders);
//       // console.log(res.data.myOrders.menuitems);
      
//       setOrders(res.data.myOrders);
//     } catch (error) {
//       console.log("Orders fetch error:", error.message);
//       setOrders([]);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   // Cancel Order
//   const handleCancelOrder = async (orderId) => {
//     try {
//       const res = await axios.delete(
//         `http://localhost:8000/api/order/cancel/${orderId}`,
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       // alert(res.data.message);
//       toast.success(res.data.message);
//       fetchOrders();
//     } catch (error) {
//       console.log("Cancel Order Error:", error);
//       // alert(error.response?.data?.message || "Failed to cancel order");
//       toast.error(error.response?.data?.message || "Failed to cancel order");
//     }
//   };

//   // Status badge colors
//   const getStatusBadge = (status) => {
//     switch (status) {
//       case "pending":
//         return "bg-orange-200 text-orange-800";
//       case "served":
//         return "bg-green-200 text-green-800";
//       case "cancelled":
//         return "bg-red-200 text-red-800";
//       case "preparing":
//         return "bg-yellow-200 text-yellow-800";
//       default:
//         return "bg-green-200 text-gray-800";
//     }
//   };

//   return (
//     <section className="py-16 px-4 md:px-20 bg-gray-50 min-h-screen pt-24">
//       <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
//         My Orders
//       </h2>

//       {orders.length === 0 ? (
//         <p className="text-center text-gray-500 text-lg">
//           You have no orders yet 🛒
//         </p>
//       ) : (
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {orders.map((order) => {
//             let addressObj = {};
//             try {
//               addressObj = JSON.parse(order.address);
//             } catch (e) {
//               addressObj = { fullName: order.address };
//             }

//             return (
//               <div
//                 key={order._id}
//                 className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition"
//               >
//                 <div>
//                   {/* Order Header */}
//                   <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-lg font-semibold text-gray-700">
//                       Order #{order._id.slice(-6)}
//                     </h3>
//                     <span
//                       className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusBadge(order.status)}`}
//                     >
//                       {order.status.toUpperCase()}
//                     </span>
//                   </div>

//                   {/* Delivery Address */}
//                   <div className="mb-4">
//                     <h4 className="font-semibold text-gray-600 mb-1">
//                       Delivery Address:
//                     </h4>
//                     <p className="text-gray-700 text-sm">{addressObj.fullName}</p>
//                     <p className="text-gray-700 text-sm">{addressObj.phone}</p>
//                     <p className="text-gray-700 text-sm overflow-hidden">{addressObj.address}</p>
//                     <p className="text-gray-700 text-sm">{addressObj.city}</p>
//                   </div>

//                   {/* Order Items */}
//                   <div className="mb-4">
//                     <h4 className="font-semibold text-gray-600 mb-1">
//                       Items:
//                     </h4>
//                     {order.orderItems.map((item, idx) => (
//                       <div
//                         key={idx}
//                         className="flex justify-between text-gray-700 text-sm py-1 border-b border-gray-100"
//                       >
//                         <span>
//                           {item.menuitems?.name} x {item?.quantity}
//                         </span>
//                         <span>Rs. {item.menuitems?.price * item?.quantity}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Footer: Total & Cancel */}
//                 <div className="mt-4 flex flex-col gap-3">
//                   <div className="flex justify-between font-semibold text-gray-800">
//                     <span>Total:</span>
//                     <span>Rs. {order.totalPrice}</span>
//                   </div>

//                   {order.status === "pending" && (
//                     <button
//                       onClick={() => handleCancelOrder(order._id)}
//                       className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
//                     >
//                       Cancel Order
//                     </button>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </section>
//   );
// }

// export default MyOrders;







// With DarkMode Adding Redux

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { FiPackage, FiMapPin, FiShoppingBag, FiXCircle, FiCheckCircle, FiClock, FiAlertCircle } from "react-icons/fi";

function MyOrders() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const token = localStorage.getItem("token"); // user token
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user orders
  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://resturent-app-snowy.vercel.app/api/order/my", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(res.data.myOrders);
      setLoading(false);
    } catch (error) {
      console.log("Orders fetch error:", error.message);
      setOrders([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Cancel Order
  const handleCancelOrder = async (orderId) => {
    try {
      const res = await axios.delete(
        `https://resturent-app-snowy.vercel.app/api/order/cancel/${orderId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success(res.data.message);
      fetchOrders();
    } catch (error) {
      console.log("Cancel Order Error:", error);
      toast.error(error.response?.data?.message || "Failed to cancel order");
    }
  };

  // Status badge colors and icons
  const getStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return {
          bg: darkMode ? "bg-orange-900 text-orange-300" : "bg-orange-100 text-orange-800",
          icon: <FiClock className="inline mr-1" />
        };
      case "served":
        return {
          bg: darkMode ? "bg-green-900 text-green-300" : "bg-green-100 text-green-800",
          icon: <FiCheckCircle className="inline mr-1" />
        };
      case "cancelled":
        return {
          bg: darkMode ? "bg-red-900 text-red-300" : "bg-red-100 text-red-800",
          icon: <FiXCircle className="inline mr-1" />
        };
      case "preparing":
        return {
          bg: darkMode ? "bg-yellow-900 text-yellow-300" : "bg-yellow-100 text-yellow-800",
          icon: <FiAlertCircle className="inline mr-1" />
        };
      default:
        return {
          bg: darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-800",
          icon: <FiPackage className="inline mr-1" />
        };
    }
  };

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900'
      }`}>
        <div className="text-center">
          <div className={`animate-spin rounded-full h-16 w-16 border-b-4 mx-auto mb-4 ${
            darkMode ? 'border-yellow-400' : 'border-yellow-600'
          }`}></div>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Loading your orders...
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className={`min-h-screen py-16 px-4 md:px-20 pt-24 transition-colors duration-300 ${
      darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            My Orders
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Track and manage your delicious orders
          </p>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-16">
            <FiShoppingBag className={`text-6xl mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              You have no orders yet 🛒
            </p>
            <p className={`mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              Start ordering your favorite dishes!
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {orders.map((order) => {
              let addressObj = {};
              try {
                addressObj = JSON.parse(order.address);
              } catch (e) {
                addressObj = { fullName: order.address };
              }

              const statusInfo = getStatusBadge(order.status);

              return (
                <div
                  key={order._id}
                  className={`rounded-2xl shadow-xl p-6 flex flex-col justify-between transition-all duration-300 transform hover:scale-102 ${
                    darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                  }`}
                >
                  <div>
                    {/* Order Header */}
                    <div className="flex justify-between items-center mb-4">
                      <h3 className={`text-lg font-semibold flex items-center gap-2 ${
                        darkMode ? 'text-white' : 'text-gray-700'
                      }`}>
                        <FiPackage />
                        Order #{order._id.slice(-6)}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center ${statusInfo.bg}`}>
                        {statusInfo.icon}
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </div>

                    {/* Delivery Address */}
                    <div className="mb-4">
                      <h4 className={`font-semibold mb-2 flex items-center gap-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <FiMapPin />
                        Delivery Address:
                      </h4>
                      <div className={`text-sm space-y-1 ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                        <p>{addressObj.fullName}</p>
                        <p>{addressObj.phone}</p>
                        <p className="truncate">{addressObj.address}</p>
                        <p>{addressObj.city}</p>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="mb-4">
                      <h4 className={`font-semibold mb-2 flex items-center gap-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        <FiShoppingBag />
                        Items:
                      </h4>
                      <div className="space-y-2">
                        {order.orderItems.map((item, idx) => (
                          <div
                            key={idx}
                            className={`flex justify-between text-sm py-2 px-3 rounded-lg ${
                              darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-50 text-gray-700'
                            }`}
                          >
                            <span>
                              {item.menuitems?.name} × {item?.quantity}
                            </span>
                            <span className={`font-semibold ${
                              darkMode ? 'text-yellow-400' : 'text-yellow-600'
                            }`}>
                              Rs. {item.menuitems?.price * item?.quantity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer: Total & Cancel */}
                  <div className="mt-4 space-y-3">
                    <div className={`flex justify-between font-bold text-lg ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      <span>Total:</span>
                      <span className={`${
                        darkMode ? 'text-yellow-400' : 'text-yellow-600'
                      }`}>
                        Rs. {order.totalPrice}
                      </span>
                    </div>

                    {order.status === "pending" && (
                      <button
                        onClick={() => handleCancelOrder(order._id)}
                        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <FiXCircle />
                        Cancel Order
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default MyOrders;
