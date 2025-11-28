// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

// import { fetchCart, updateItemQuantity, removeItem, updateCartCount } from "../../redux/slices/cart.Slice.js";
// import { removeItemFromBackend } from "../../redux/slices/cart.Slice.js";

// const Cart = () => {
  
//   const darkMode = useSelector((state) => state.darkMode.darkMode);
  
//   const dispatch = useDispatch();
//   const { items, loading } = useSelector((state) => state.cart);

//   const handleQtyChange = (id, qty) => {

//     if (qty < 1) 
//       return;
//     dispatch(updateItemQuantity({ productId: id, quantity: qty }));
//   };

//   // console.log(items[0]?.productId.price * items[0]?.quantity);
  
  
//   useEffect(() => {
//     dispatch(fetchCart());
//   }, [dispatch]);
  

//   const removeItemHandler = async (cartItemId) => {
//     const res = await removeItemFromBackend(cartItemId);
//     if (res) {
//       dispatch(removeItem(cartItemId));
//       dispatch(updateCartCount())

//     } else {
//       // alert("Failed to remove item from cart")
//       toast.error("Failed to remove item from cart");
//     }
//   };

//   const totalPrice = items.reduce((sum, item) => sum + item.productId?.price * item.quantity, 0);

//   return (
//     <div className="max-w-5xl mx-auto p-4 pt-24">
//     <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>

//     {loading && <p className="text-gray-600">Loading...</p>}

//     {!loading && items.length === 0 && (
//       <p className="text-gray-500 text-lg">Your cart is empty 🚀</p>
//     )}

//     {!loading && items.length > 0 && (
//       <div className="space-y-4">
//         {items.map((item) => (
//           <div
//             key={item._id}
//             className="flex flex-col md:flex-row md:items-center justify-between bg-white p-4 shadow rounded-lg gap-4"
//           >
//             {/* LEFT SECTION */}
//             <div className="flex items-center gap-4 w-full md:w-auto">
//               <img
//                 src={item?.productId?.image}
//                 alt={item?.productId?.name}
//                 className="w-24 h-24 object-cover rounded-md"
//               />

//               {/* Product Info */}
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {item?.productId?.name}
//                 </h3>
//                 <p className="text-gray-600">
//                   Rs {item?.productId?.price} × {item.quantity}
//                 </p>
//               </div>
//             </div>

//             {/* RIGHT SECTION: QTY + REMOVE */}
//             <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-4">
//               {/* Quantity Box */}
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={() =>
//                     handleQtyChange(item?.productId._id, item.quantity - 1)
//                   }
//                   className="px-3 py-2 bg-gray-200 rounded-md text-lg font-bold"
//                 >
//                   -
//                 </button>

//                 <span className="text-lg font-semibold">{item.quantity}</span>

//                 <button
//                   onClick={() =>
//                     handleQtyChange(item?.productId._id, item.quantity + 1)
//                   }
//                   className="px-3 py-2 bg-gray-200 rounded-md text-lg font-bold"
//                 >
//                   +
//                 </button>
//               </div>

//               {/* Remove Button */}
//               <button
//                 onClick={() => removeItemHandler(item._id)}
//                 className="text-red-500 hover:text-red-700 font-semibold"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}

//         {/* TOTAL PRICE SECTION */}
//         <div className="mt-6 text-center md:text-right">
//           <h3 className="text-2xl font-bold text-gray-800">
//             Total: Rs {totalPrice}
//           </h3>

//           <Link to={"/checkout"}>
//             <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow w-full md:w-auto">
//               Checkout
//             </button>
//           </Link>
//         </div>
//       </div>
//     )}
//   </div>
//   );
// };

// export default Cart;





// Adding this Dark Mode Toggle
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchCart, updateItemQuantity, removeItem, updateCartCount } from "../../redux/slices/cart.Slice.js";
import { removeItemFromBackend } from "../../redux/slices/cart.Slice.js";
import { FiMinus, FiPlus, FiTrash2, FiShoppingCart } from "react-icons/fi";

const Cart = () => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.cart);

  const handleQtyChange = (id, qty) => {
    if (qty < 1) return;
    dispatch(updateItemQuantity({ productId: id, quantity: qty }));
  };

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const removeItemHandler = async (cartItemId) => {
    const res = await removeItemFromBackend(cartItemId);
    if (res) {
      dispatch(removeItem(cartItemId));
      dispatch(updateCartCount());
    } else {
      toast.error("Failed to remove item from cart");
    }
  };

  const totalPrice = items.reduce((sum, item) => sum + item.productId?.price * item.quantity, 0);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900'
    }`}>
      <div className="max-w-6xl mx-auto p-4 pt-24">
        <div className="flex items-center justify-center mb-8">
          <FiShoppingCart className={`text-4xl mr-3 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
          <h2 className={`text-3xl md:text-4xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Your Cart
          </h2>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className={`animate-spin rounded-full h-12 w-12 border-b-2 ${
              darkMode ? 'border-yellow-400' : 'border-yellow-600'
            }`}></div>
            <p className={`ml-4 text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Loading your cart...
            </p>
          </div>
        )}

        {!loading && items.length === 0 && (
          <div className="text-center py-16">
            <FiShoppingCart className={`mx-auto text-6xl mb-4 ${
              darkMode ? 'text-gray-500' : 'text-gray-400'
            }`} />
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Your cart is empty 🚀
            </p>
            <p className={`mt-2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              Add some delicious items to get started!
            </p>
            <Link to="/shop">
              <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                Browse Menu
              </button>
            </Link>
          </div>
        )}

        {!loading && items.length > 0 && (
          <>
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item._id}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-6 shadow-xl rounded-2xl gap-6 transition-all duration-300 transform hover:scale-102 ${
                    darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                  }`}
                >
                  {/* LEFT SECTION */}
                  <div className="flex items-center gap-4 flex-1">
                    <img
                      src={item?.productId?.image}
                      alt={item?.productId?.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl shadow-md"
                      loading="lazy"
                    />

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className={`text-lg sm:text-xl font-bold ${
                        darkMode ? 'text-white' : 'text-gray-800'
                      }`}>
                        {item?.productId?.name}
                      </h3>
                      <p className={`text-sm sm:text-base ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Rs {item?.productId?.price} each
                      </p>
                      <p className={`text-sm font-semibold ${
                        darkMode ? 'text-yellow-400' : 'text-yellow-600'
                      }`}>
                        Subtotal: Rs {item?.productId?.price * item.quantity}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT SECTION: QTY + REMOVE */}
                  <div className="flex items-center justify-between sm:justify-end gap-4">
                    {/* Quantity Box */}
                    <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-full p-1">
                      <button
                        onClick={() =>
                          handleQtyChange(item?.productId._id, item.quantity - 1)
                        }
                        className={`p-2 rounded-full transition-all duration-300 ${
                          darkMode ? 'bg-gray-600 text-white hover:bg-gray-500' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        }`}
                      >
                        <FiMinus />
                      </button>

                      <span className={`px-4 py-2 font-bold text-lg ${
                        darkMode ? 'text-gray-500' : 'text-gray-900'
                      }`}>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          handleQtyChange(item?.productId._id, item.quantity + 1)
                        }
                        className={`p-2 rounded-full transition-all duration-300 ${
                          darkMode ? 'bg-gray-600 text-white hover:bg-gray-500' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        }`}
                      >
                        <FiPlus />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItemHandler(item._id)}
                      className="p-3 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                      title="Remove item"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* TOTAL PRICE SECTION */}
            <div className={`mt-10 p-6 rounded-2xl shadow-xl ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className={`text-2xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    Total: Rs {totalPrice}
                  </h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {items.length} item{items.length > 1 ? 's' : ''} in cart
                  </p>
                </div>

                <Link to={"/checkout"}>
                  <button className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    <FiShoppingCart />
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
