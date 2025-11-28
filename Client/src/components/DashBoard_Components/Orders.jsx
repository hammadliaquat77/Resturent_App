import React, { useEffect, useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";

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

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* 4 Simple Category Boxes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

        {/* Each box */}
        {["pending", "preparing", "served", "cancelled"].map((status) => (
          <div
            key={status}
            onClick={() => setActiveTab(status)}
            className={`p-6 rounded-xl cursor-pointer text-center font-semibold text-lg shadow 
              ${activeTab === status ? "bg-black text-white" : "bg-white text-gray-800"}
            `}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
            <div className="text-sm mt-1 text-gray-500 font-normal">
              ({orders.filter((o) => o.status === status).length})
            </div>
          </div>
        ))}
      </div>

      {/* Selected Orders Cards */}
      <h2 className="text-2xl font-bold mb-4 capitalize">{activeTab} Orders</h2>

      <div className="grid gap-4">
        {filteredOrders.length === 0 && (
          <p className="text-gray-500">No orders found.</p>
        )}

        {filteredOrders.map((order) => {
          const addr = JSON.parse(order.address);

          // const addr  = order.address;


          console.log("Address==>", addr);


          return (
            <div
              key={order._id}
              className="bg-white rounded-xl p-5 shadow border"
            >
              <h3 className="font-semibold text-gray-800 mb-2">
                Order #{order._id.slice(-5)}
              </h3>

              <p><strong>Name:</strong> {addr.fullName}</p>
              <p><strong>Phone:</strong> {addr.phone}</p>
              <p><strong>Address:</strong> {addr.address}</p>
              <p><strong>City:</strong> {addr.city}</p>
              <p><strong>Total:</strong> Rs. {order.totalPrice}</p>
              <p><strong>Payment:</strong> {order.paymentType}</p>

              <p className="mt-2 font-medium">Items:</p>
              <ul className="list-disc ml-5 text-sm text-gray-600">
                {order.orderItems.map((item) => (
                  <li key={item._id}>
                    {item.menuitems?.name} × {item.quantity}
                  </li>
                ))}
              </ul>

              {/* Actions */}
              <div className="flex justify-between mt-4">

                <select
                  className="border px-2 py-1 rounded"
                  value={order.status}
                  onChange={(e) =>
                    handleStatus(order._id, e.target.value)
                  }
                >
                  <option value="pending">Pending</option>
                  <option value="preparing">Preparing</option>
                  <option value="served">Served</option>
                  <option value="cancelled">Cancelled</option>
                </select>

                <button
                  onClick={() => deleteOrder(order._id)}
                  className="bg-red-500 text-white px-4 py-1 rounded"
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
