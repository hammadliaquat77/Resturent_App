import React, { useState, useEffect } from "react";
import axios from "axios";

function Checkout() {
  const token = localStorage.getItem("token");

  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  // 🟢 Fetch Cart Items
  const getCartItems = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/cart/all", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const items = res.data?.cart?.items || [];
      setCartItems(items);

      console.log(items);
      

      const total = items.reduce((sum, item) =>
          sum + (item?.productId?.price || 0) * (item?.quantity || 1),
        0
      );
      setSubtotal(total);
    } catch (error) {
      console.log("Cart Error:", error.message);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  // ⭐ User Form
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "cash", 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ⭐ Place Order
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const orderPayload = {
        orderItems: cartItems.map((item) => ({
          menuitems: item.productId._id, // ObjectId required by backend
          quantity: item.quantity,
        })),
        totalPrice: subtotal,
        paymentType: formData.paymentMethod === "cash" ? "COD" : "Online",
        address: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
        }),
      };

      const res = await axios.post(
        "http://localhost:8000/api/order/place",
        orderPayload,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("Order Placed:", res.data);

      alert("Order placed successfully!");

    //     Clear Cart in Bakend
       await axios.delete("http://localhost:8000/api/cart/clear", {
        headers: { Authorization: `Bearer ${token}` },
      });

    //  Reset Frontent Cart state
       setCartItems([]);
       setSubtotal(0);


      // Optionally, clear cart after order
      setCartItems([]);
      setSubtotal(0);
      setFormData({
        fullName: "",
        phone: "",
        address: "",
        city: "",
        paymentMethod: "cash",
      });
    } catch (error) {
      console.log("Place Order Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Order failed!");
    }
  };

  return (
    <section className="relative bg-white flex flex-col overflow-hidden pt-16">
      <div className="py-16 px-4 md:px-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          {/* LEFT — Shipping Form */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">
              Checkout
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block font-medium mb-1">Payment Method</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-400"
                >
                  <option value="cash">Cash on Delivery</option>
                  <option value="online">Online Payment</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition text-lg"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* RIGHT — Order Summary */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
              Order Summary
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">Subtotal:</span>
                <span className="font-bold">Rs. {subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">Delivery Charges:</span>
                <span className="font-bold">Rs. 200</span>
              </div>

              <hr />

              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span>Rs. {subtotal + 200}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Checkout;
