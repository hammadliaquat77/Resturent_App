import React, { useState, useEffect } from "react";
import axios from "axios";

function MyOrders() {
  const token = localStorage.getItem("token"); // user token
  const [orders, setOrders] = useState([]);

  // Fetch user orders
  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/order/my", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res.data.myOrders);
      // console.log(res.data.myOrders.menuitems);
      
      setOrders(res.data.myOrders);
    } catch (error) {
      console.log("Orders fetch error:", error.message);
      setOrders([]);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Cancel Order
  const handleCancelOrder = async (orderId) => {
    try {
      const res = await axios.delete(
        `http://localhost:8000/api/order/cancel/${orderId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert(res.data.message);
      fetchOrders();
    } catch (error) {
      console.log("Cancel Order Error:", error);
      alert(error.response?.data?.message || "Failed to cancel order");
    }
  };

  // Status badge colors
  const getStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return "bg-orange-200 text-orange-800";
      case "served":
        return "bg-green-200 text-green-800";
      case "cancelled":
        return "bg-red-200 text-red-800";
      case "preparing":
        return "bg-yellow-200 text-yellow-800";
      default:
        return "bg-green-200 text-gray-800";
    }
  };

  return (
    <section className="py-16 px-4 md:px-20 bg-gray-50 min-h-screen pt-24">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
        My Orders
      </h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          You have no orders yet 🛒
        </p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {orders.map((order) => {
            let addressObj = {};
            try {
              addressObj = JSON.parse(order.address);
            } catch (e) {
              addressObj = { fullName: order.address };
            }

            return (
              <div
                key={order._id}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition"
              >
                <div>
                  {/* Order Header */}
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">
                      Order #{order._id.slice(-6)}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusBadge(order.status)}`}
                    >
                      {order.status.toUpperCase()}
                    </span>
                  </div>

                  {/* Delivery Address */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-600 mb-1">
                      Delivery Address:
                    </h4>
                    <p className="text-gray-700 text-sm">{addressObj.fullName}</p>
                    <p className="text-gray-700 text-sm">{addressObj.phone}</p>
                    <p className="text-gray-700 text-sm overflow-hidden">{addressObj.address}</p>
                    <p className="text-gray-700 text-sm">{addressObj.city}</p>
                  </div>

                  {/* Order Items */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-600 mb-1">
                      Items:
                    </h4>
                    {order.orderItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between text-gray-700 text-sm py-1 border-b border-gray-100"
                      >
                        <span>
                          {item.menuitems?.name} x {item?.quantity}
                        </span>
                        <span>Rs. {item.menuitems?.price * item?.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Total & Cancel */}
                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex justify-between font-semibold text-gray-800">
                    <span>Total:</span>
                    <span>Rs. {order.totalPrice}</span>
                  </div>

                  {order.status === "pending" && (
                    <button
                      onClick={() => handleCancelOrder(order._id)}
                      className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                    >
                      Cancel Order
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default MyOrders;
