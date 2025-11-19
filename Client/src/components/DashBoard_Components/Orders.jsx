import React, { useState, useEffect } from "react";
import axios from "axios";

function Orders() {
  const token = localStorage.getItem("token");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchAllOrders();
  }, []);

  // Fetch all orders
  const fetchAllOrders = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/order/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log(res.data.allOrders);

      setOrders(res.data.allOrders);
    } catch (error) {
      console.log("Orders fetch error:", error.message);
      setOrders([]);
    }
  };

// Update delivery status
  const changeDeliveryStatus = async (Id, newStatus) => {
    try {
      const res = await axios.put(
        `http://localhost:8000/api/order/update/${Id}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const updatedOrder = res.data.order;

      setOrders((prev) =>
        prev.map((order) => (order._id === Id ? updatedOrder : order))
      );

      alert(res.data.message);
      fetchAllOrders();

    } catch (error) {
      console.log("Orders fetch error:", error.message);
    }
  };

// Delete Order Admin
  const handleDeleteOrder = async (id)=> {
   try {
       const res = await axios.delete(`http://localhost:8000/api/order/delete/${id}`, {
           headers: { Authorization: `Bearer ${token}` }
       }) 

       alert(res.data.message);
       fetchAllOrders();
   } catch (error) {
      alert(error.response?.data?.message || "Failed to delete order");
   }
  }


  const getStatusColor = (status) => {
    switch (status) {
      case "served":
        return "bg-green-200 text-green-800";
      case "pending":
        return "bg-yellow-200 text-yellow-800";
      case "cancelled":
        return "bg-red-200 text-red-800";
      case "preparing":
        return "bg-blue-300 text-blue-800";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };


  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Orders <span className="text-gray-500 text-xl">({orders.length})</span>
      </h1>

      <div className="grid gap-6">
        {orders.map((order) => {
          const addressObj = JSON.parse(order.address);
          return (
            <div
              key={order._id}
              className="bg-white rounded-xl shadow-md p-5 border hover:shadow-xl transition"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-gray-700">Order ID: {order._id}</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </div>

              <div className="mb-2 text-gray-700">
                <strong>Customer:</strong> {addressObj.fullName}
              </div>

              <div className="mb-2 text-gray-700">
                <strong>Phone:</strong> {addressObj.phone}
              </div>

              <div className="mb-3 text-gray-700">
                <strong>Address:</strong> {addressObj.address}, {addressObj.city}
              </div>

              <div className="mb-3 text-gray-700">
                <strong>Payment Type:</strong> {order.paymentType}
              </div>

              <div className="mb-3 text-gray-700">
                <strong>Items:</strong>
                <ul className="mt-1 ml-4 list-disc">
                  {order.orderItems.map((item) => (
                    <li key={item._id}>
                      {item.menuitems?.name} x {item.quantity}

                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-3 font-semibold text-gray-800">
                Total: Rs.{order.totalPrice}
              </div>

              <div className="flex items-center justify-between">
                <select
                 className="py-1.5 px-2"
                  value={order.status}
                  onChange={(e) => changeDeliveryStatus(order._id, e.target.value)}
                >
                  <option value="pending">Pending</option>
                  <option value="preparing">Preparing</option>
                  <option value="served">Served</option>
                  <option value="cancelled">Cancelled</option>
                </select>


                <button
                  onClick={() => handleDeleteOrder(order._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
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










// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {useSelector, useDispatch} from "react-redux";
// import { fetchOrders } from "../../redux/slices/order.Slice";

// function Orders() {
//   const token = localStorage.getItem("token");
//   const dispatch = useDispatch();
//   const orders =  useSelector(state => state.orders.orders);

//      const [orderss, setOrders] = useState([]);

  
//   useEffect(() => {
//     dispatch(fetchOrders());
//   }, []);

//   console.log(orders);
  
  
// // Update delivery status
//   const changeDeliveryStatus = async (Id, newStatus) => {
//     try {
//       const res = await axios.put(
//         `http://localhost:8000/api/order/update/${Id}`,
//         { status: newStatus },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       const updatedOrder = res.data.order;

//       setOrders((prev) =>
//         prev.map((order) => (order._id === Id ? updatedOrder : order))
//       );
//     } catch (error) {
//       console.log("Orders fetch error:", error.message);
//     }
//   };


//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Delivered":
//         return "bg-green-100 text-green-800";
//       case "Pending":
//         return "bg-yellow-100 text-yellow-800";
//       case "Cancelled":
//         return "bg-red-100 text-red-800";
//       default:
//         return "bg-gray-100 text-gray-700";
//     }
//   };


//   const handleDelete = (id) => {
//     setOrders((prev) => prev.filter((order) => order._id !== id));
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6 text-gray-800">
//         Orders <span className="text-gray-500 text-xl">({orders.length})</span>
//       </h1>

//       <div className="grid gap-6">
//         {orders.map((order) => {
//           const addressObj = JSON.parse(order.address);
//           return (
//             <div
//               key={order._id}
//               className="bg-white rounded-xl shadow-md p-5 border hover:shadow-xl transition"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <span className="font-semibold text-gray-700">Order ID: {order._id}</span>
//                 <span
//                   className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
//                     order.status
//                   )}`}
//                 >
//                   {order.status}
//                 </span>
//               </div>

//               <div className="mb-2 text-gray-700">
//                 <strong>Customer:</strong> {addressObj.fullName}
//               </div>

//               <div className="mb-2 text-gray-700">
//                 <strong>Phone:</strong> {addressObj.phone}
//               </div>

//               <div className="mb-3 text-gray-700">
//                 <strong>Address:</strong> {addressObj.address}, {addressObj.city}
//               </div>

//               <div className="mb-3 text-gray-700">
//                 <strong>Payment Type:</strong> {order.paymentType}
//               </div>

//               <div className="mb-3 text-gray-700">
//                 <strong>Items:</strong>
//                 <ul className="mt-1 ml-4 list-disc">
//                   {order.orderItems.map((item) => (
//                     <li key={item._id}>
//                       {item.menuitems.name} x {item.quantity}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="mb-3 font-semibold text-gray-800">
//                 Total: ${order.totalPrice}
//               </div>

//               <div className="flex items-center justify-between">
//                 <select
//                  className="py-1.5 px-2"
//                   value={order.status}
//                   onChange={(e) => changeDeliveryStatus(order._id, e.target.value)}
//                 >
//                   <option value="pending">Pending</option>
//                   <option value="preparing">Preparing</option>
//                   <option value="served">Served</option>
//                   <option value="cancelled">Cancelled</option>
//                 </select>


//                 <button
//                   onClick={() => handleDelete(order._id)}
//                   className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
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
