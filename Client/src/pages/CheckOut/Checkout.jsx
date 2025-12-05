import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../../redux/slices/cart.Slice";

import { toast } from "react-toastify";

function Checkout() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);

  console.log(cartItems);

  const subtotal = cartItems.reduce((sum, items) => sum + items.productId.price * items.quantity, 0);

  //  Fetch Cart Items
  const getCartItems = async () => {
    try {
      const res = await axios.get("https://resturent-app-snowy.vercel.app/api/cart/all", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const items = res.data?.cart?.items || [];
      // setCartItems(items);

      console.log(items);


      const total = items.reduce((sum, item) =>
        sum + (item?.productId?.price || 0) * (item?.quantity || 1),
        0
      );
      // setSubtotal(total);
      console.log(total);

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

    // STOP if subtotal is 0
    if (subtotal <= 0 || cartItems.length === 0) {
      // alert("Your cart is empty. Add items before placing an order!");
      toast.error("Your cart is empty. Add items before placing an order!");
      return;
    }

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
        "https://resturent-app-snowy.vercel.app/api/order/place",
        orderPayload,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("Order Placed:", res.data);

      // alert("Order placed successfully!");
      toast.success("Order placed successfully!");

      navigate("/myorders");


      //     Clear Cart in Bakend
      await axios.delete("https://resturent-app-snowy.vercel.app/api/cart/clear", {
        headers: { Authorization: `Bearer ${token}` },
      });

      //  Reset Frontent Cart state
      dispatch(fetchCart());

      // Optionally, clear cart after order
      setFormData({
        fullName: "",
        phone: "",
        address: "",
        city: "",
        paymentMethod: "cash",
      });
    } catch (error) {
      console.log("Place Order Error:", error.response?.data || error.message);
      // alert(error.response?.data?.message || "Order failed!");
      toast.error(error.response?.data?.message || "Order failed!");
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
                  minLength={11}
                  maxLength={11}
                  onChange={
                    (e) => {
                      const onlyNumber = e.target.value.replace(/[^0-9]/g, "");
                      setFormData({ ...formData, phone: onlyNumber });
                    }
                  }

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
                disabled={subtotal <= 0}
                className={`w-full py-3 rounded-lg text-lg 
                  ${subtotal <= 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-red-500 hover:bg-red-600 text-white cursor-pointer"}
            `}
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
