import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("user/fetch", async () => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.get("https://resturent-app-snowy.vercel.app/api/auth/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
        return response.data.allUser;
    } catch (error) {
        throw error.response?.data || error.message;
    }
});

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },

     reducers: {
    // agar future me koi manual action chahiye ho
    clearUsers: (state) => {
      state.users = [];
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
    
})

export const { clearUsers } = userSlice.actions;
export default userSlice.reducer
