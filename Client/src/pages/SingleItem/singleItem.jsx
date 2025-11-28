// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// import { toast } from "react-toastify";

// import { useDispatch, useSelector } from "react-redux";
// import { addItem } from "../../redux/slices/cart.Slice.js";

// function SingleFood() {

//   const darkMode = useSelector((state) => state.darkMode.darkMode);

//   const dispatch = useDispatch();
//   const { id } = useParams();
  
//   const [food, setFood] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [quantity, setQuantity] = useState(1);

//   const token = localStorage.getItem("token");

//   // Fetch single food item
//   const fetchFood = async () => {
//     try {
//       const res = await axios.get(`http://localhost:8000/api/menu/single/${id}`, {
//         headers: token ? { Authorization: `Bearer ${token}` } : {},
//       });
//       setFood(res.data.singlefood);
//       setLoading(false);
//     } catch (err) {
//       setError("Failed to load food item");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchFood();
//   }, [id]);

//   // Add to cart function
//   const addToCart = async () => {
//     if (!token) return alert("Please login to add items to cart!");

//     try {
//       const res = await axios.post(
//         "http://localhost:8000/api/cart/add",
//         { productId: food._id, quantity },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (res.data.success) {
//         // Redux store me add karo
//         dispatch(addItem({ product: { productId: food, quantity } }));

//         // alert(`${food.name} x${quantity} added to cart successfully!`);
//         toast.success(`${food.name} x${quantity} added to cart successfully!`);
//         setQuantity(1); // reset quantity after adding
//       } else {
//         // alert("Failed to add item to cart!");
//         toast.error("Failed to add item to cart!");
//       }
//     } catch (err) {
//       console.error(err.response?.data || err.message);
//       // alert("Failed to add item to cart! Please try again.");
//       toast.error("Failed to add item to cart! Please try again.");
//     }
//   };

//   if (loading) return <p className="text-center mt-20 text-gray-500">Loading...</p>;
//   if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;
//   if (!food) return <p className="text-center mt-20 text-gray-500">Food not found</p>;

//   return (
//     <section className={`py-16 px-4 md:px-20 md:pt-40 bg-gray-50 min-h-screen pt-36 
//     ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'}`}>
//       <div className={`max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row 
//         ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
//         {/* Image */}
//         <div className="md:w-1/2">
//           <img src={food.image} alt={food.name} className="w-full h-full object-cover" />
//         </div>

//         {/* Details */}
//         <div className="md:w-1/2 p-6 flex flex-col justify-between">
//           <div>
//             <h1 className="text-3xl font-bold mb-4">{food.name}</h1>
//             <p className="text-gray-600 mb-4">{food.description}</p>
//             <p className="text-lg font-semibold mb-2">Category: {food.category}</p>
//             <p className="text-2xl font-bold text-red-500 mb-4">Rs. {food.price}</p>
//             <p className={`font-semibold mb-4 ${food.isAvailable ? "text-green-600" : "text-red-600"}`}>
//               {food.isAvailable ? "Available" : "Not Available"}
//             </p>
//           </div>

//           {food.isAvailable && (
//             <div className="flex items-center gap-4">
//               {/* Quantity Selector */}
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
//                   className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
//                 >
//                   -
//                 </button>
//                 <span className="font-bold text-lg">{quantity}</span>
//                 <button
//                   onClick={() => setQuantity(prev => prev + 1)}
//                   className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
//                 >
//                   +
//                 </button>
//               </div>

//               {/* Add to Cart Button */}
//               <button
//                 onClick={addToCart}
//                 className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg font-semibold transition"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SingleFood;




// DatkMode Adding
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cart.Slice.js";
import { FiMinus, FiPlus, FiShoppingCart, FiArrowLeft, FiCheckCircle, FiXCircle } from "react-icons/fi";

function SingleFood() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
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
    if (!token) {
      toast.error("Please login to add items to cart!");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8000/api/cart/add",
        { productId: food._id, quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.success) {
        dispatch(addItem({ product: { productId: food, quantity } }));
        toast.success(`${food.name} x${quantity} added to cart successfully!`);
        setQuantity(1); // reset quantity after adding
      } else {
        toast.error("Failed to add item to cart!");
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      toast.error("Failed to add item to cart! Please try again.");
    }
  };

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}>
        <div className="text-center">
          <div className={`animate-spin rounded-full h-16 w-16 border-b-4 mx-auto mb-4 ${
            darkMode ? 'border-yellow-400' : 'border-yellow-600'
          }`}></div>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Loading delicious details...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}>
        <div className="text-center">
          <FiXCircle className={`text-6xl mb-4 ${darkMode ? 'text-red-400' : 'text-red-500'}`} />
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-red-500'}`}>{error}</p>
          <Link to="/shop">
            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full transition-all duration-300">
              Back to Menu
            </button>
          </Link>
        </div>
      </div>
    );
  }

  if (!food) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}>
        <div className="text-center">
          <FiXCircle className={`text-6xl mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Food not found</p>
          <Link to="/shop">
            <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full transition-all duration-300">
              Back to Menu
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className={`min-h-screen py-16 px-4 md:px-20 md:pt-24 pt-28 transition-colors duration-300 ${
      darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link to="/shop">
          <button className={`mb-6 flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
          }`}>
            <FiArrowLeft />
            Back to Menu
          </button>
        </Link>

        <div className={`rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row transition-all duration-300 ${
          darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          {/* Image */}
          <div className="lg:w-1/2 relative">
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-64 lg:h-full object-cover"
              loading="lazy"
            />
            <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
              food.isAvailable ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}>
              {food.isAvailable ? <FiCheckCircle className="inline mr-1" /> : <FiXCircle className="inline mr-1" />}
              {food.isAvailable ? "Available" : "Unavailable"}
            </div>
          </div>

          {/* Details */}
          <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <h1 className={`text-3xl lg:text-4xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>
                {food.name}
              </h1>
              <p className={`text-base lg:text-lg leading-relaxed mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {food.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}>
                  Category: {food.category}
                </div>
                <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  food.isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {food.isAvailable ? "In Stock" : "Out of Stock"}
                </div>
              </div>
              <p className={`text-3xl lg:text-4xl font-bold mb-6 ${
                darkMode ? 'text-yellow-400' : 'text-yellow-600'
              }`}>
                Rs. {food.price}
              </p>
            </div>

            {food.isAvailable && (
              <div className="mt-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Quantity Selector */}
                  <div className="flex items-center gap-2">
                    <span className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Quantity:
                    </span>
                    <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-full p-1">
                      <button
                        onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
                        className={`p-2 rounded-full transition-all duration-300 ${
                          darkMode ? 'bg-gray-600 text-white hover:bg-gray-500' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        }`}
                      >
                        <FiMinus />
                      </button>
                      <span className={`px-4 py-2 font-bold text-lg ${
                        darkMode ? 'text-gray-700' : 'text-gray-900'
                      }`}>
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(prev => prev + 1)}
                        className={`p-2 rounded-full transition-all duration-300 ${
                          darkMode ? 'bg-gray-600 text-white hover:bg-gray-500' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        }`}
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={addToCart}
                    className="flex-1 sm:flex-none bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 px-8 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <FiShoppingCart />
                    Add to Cart
                  </button>
                </div>
                <p className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Subtotal: Rs. {food.price * quantity}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleFood;
