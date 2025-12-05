import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");

export const fetchCart = createAsyncThunk("cart/fetch", async () => {
  try {
    const res = await axios.get("https://resturent-app-snowy.vercel.app/api/cart/all", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.data.cart.items; // ye action.payload me aayega
  } catch (error) {
    throw error.response?.data || error.message;
  }
});


export const removeItemFromBackend = async (productId) => {
  try {
    const res = await axios.delete(
      `https://resturent-app-snowy.vercel.app/api/cart/remove/${productId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data; // backend ka response
  } catch (err) {
    console.error("Error removing item:", err.response?.data || err.message);
    return null; // ya throw err agar chaho
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 0,
    loading: false,
  },
  reducers: {
    // ✅ Add new item to cart
    addItem: (state, action) => {
      const { product } = action.payload; // { productId, quantity }
      const existingItem = state.items.find(
        (i) => i.productId._id === product.productId._id
      );

      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        state.items.push(product);
      }

      // Update total count
      state.count = state.items.reduce((sum, i) => sum + i.quantity, 0);
    },

    // ✅ Update quantity of existing item
    updateItemQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find((i) => i.productId._id === productId);
      if (item) item.quantity = quantity;
      state.count = state.items.reduce((sum, i) => sum + i.quantity, 0);
    },

    // ✅ Remove item from cart
    removeItem: (state, action) => {
      const carItemId = action.payload;
      state.items = state.items.filter((i) => i._id !== carItemId);
      state.count = state.items.reduce((sum, i) => sum + i.quantity, 0);
    },

    // ✅ Recalculate count
    updateCartCount: (state) => {
      state.count = state.items.reduce((sum, i) => sum + i.quantity, 0);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload;
        state.count = action.payload.reduce((sum, i) => sum + i.quantity, 0);
        state.loading = false;
      })
      .addCase(fetchCart.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { addItem, updateItemQuantity, removeItem, updateCartCount } =
  cartSlice.actions;

export default cartSlice.reducer;
