import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { fetchCart, updateItemQuantity, removeItem, updateCartCount } from "../../redux/slices/cart.Slice.js";
import { removeItemFromBackend } from "../../redux/slices/cart.Slice.js";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.cart);


  // console.log(items[0]?.productId.price);
  

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleQtyChange = (id, qty) => {
    if (qty < 1) return;
    dispatch(updateItemQuantity({ productId: id, quantity: qty }));
  };

  const removeItemHandler = async (cartItemId) => {
    const res = await removeItemFromBackend(cartItemId);
    if (res) {
      dispatch(removeItem(cartItemId));
      dispatch(updateCartCount())

    } else {
      alert("Failed to remove item from cart")
    }
  };

  const totalPrice = items.reduce((sum, item) => sum + item.productId?.price * item.quantity, 0);

  return (
    <div className="max-w-5xl mx-auto p-6 pt-24">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>

      {loading && <p className="text-gray-600">Loading...</p>}

      {!loading && items.length === 0 && (
        <p className="text-gray-500 text-lg">Your cart is empty 🚀</p>
      )}

      {!loading && items.length > 0 && (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white p-4 shadow rounded-lg"
            >
              {/* Image */}
              <div className="flex items-center gap-4">
                <img
                  src={item?.productId?.image}
                  alt={item?.productId?.name}
                  className="w-20 h-20 object-cover rounded-md"
                />

                {/* Info */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item?.productId?.name}
                  </h3>
                  <p className="text-gray-600">
                    Rs {item?.productId?.price} × {item.quantity}
                  </p>
                </div>
              </div>

              {/* Qty + Remove */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleQtyChange(item?.productId._id, item.quantity - 1)}
                  className="px-3 py-1 bg-gray-200 rounded-md text-lg"
                >
                  -
                </button>

                <span className="text-lg font-semibold">{item.quantity}</span>

                <button
                  onClick={() => handleQtyChange(item?.productId._id, item.quantity + 1)}
                  className="px-3 py-1 bg-gray-200 rounded-md text-lg"
                >
                  +
                </button>

                <button
                  onClick={() => removeItemHandler(item._id)}
                  className="ml-4 text-red-500 hover:text-red-700 font-semibold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* TOTAL PRICE */}
          <div className="text-right mt-6">
            <h3 className="text-2xl font-bold text-gray-800">
              Total: Rs {totalPrice}
            </h3>

            <Link to={"/checkout"}>
              <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
