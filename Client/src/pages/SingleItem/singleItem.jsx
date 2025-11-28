import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cart.Slice.js";

function SingleFood() {
  const dispatch = useDispatch();
  const { id } = useParams();
  
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const token = localStorage.getItem("token");

  // Fetch single food item
  const fetchFood = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/menu/single/${id}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      setFood(res.data.singlefood);
      setLoading(false);
    } catch (err) {
      setError("Failed to load food item");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFood();
  }, [id]);

  // Add to cart function
  const addToCart = async () => {
    if (!token) return alert("Please login to add items to cart!");

    try {
      const res = await axios.post(
        "http://localhost:8000/api/cart/add",
        { productId: food._id, quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.success) {
        // Redux store me add karo
        dispatch(addItem({ product: { productId: food, quantity } }));

        // alert(`${food.name} x${quantity} added to cart successfully!`);
        toast.success(`${food.name} x${quantity} added to cart successfully!`);
        setQuantity(1); // reset quantity after adding
      } else {
        // alert("Failed to add item to cart!");
        toast.error("Failed to add item to cart!");
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      // alert("Failed to add item to cart! Please try again.");
      toast.error("Failed to add item to cart! Please try again.");
    }
  };

  if (loading) return <p className="text-center mt-20 text-gray-500">Loading...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;
  if (!food) return <p className="text-center mt-20 text-gray-500">Food not found</p>;

  return (
    <section className="py-16 px-4 md:px-20 md:pt-28 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-1/2">
          <img src={food.image} alt={food.name} className="w-full h-full object-cover" />
        </div>

        {/* Details */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{food.name}</h1>
            <p className="text-gray-600 mb-4">{food.description}</p>
            <p className="text-lg font-semibold mb-2">Category: {food.category}</p>
            <p className="text-2xl font-bold text-red-500 mb-4">Rs. {food.price}</p>
            <p className={`font-semibold mb-4 ${food.isAvailable ? "text-green-600" : "text-red-600"}`}>
              {food.isAvailable ? "Available" : "Not Available"}
            </p>
          </div>

          {food.isAvailable && (
            <div className="flex items-center gap-4">
              {/* Quantity Selector */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
                  className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                >
                  -
                </button>
                <span className="font-bold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={addToCart}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg font-semibold transition"
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SingleFood;
