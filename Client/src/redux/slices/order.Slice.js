import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching orders
export const fetchOrders = createAsyncThunk("orders/fetch", async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get("https://resturent-api-cg1s.onrender.com/api/order/all", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.allOrders; // backend se orders
  } catch (error) {
    throw error.response?.data || error.message;
  }
});


    const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearOrders: (state) => {
      state.orders = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { clearOrders } = orderSlice.actions;
export default orderSlice.reducer;
