import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMenu = createAsyncThunk("product/fetchMenu", async () => {
    const response = await axios.get("https://resturent-api-cg1s.onrender.com/api/menu/all");
    return response.data;
});

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        items: [],
        status: "idle",
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMenu.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchMenu.fulfilled, (state, action)=> {
            state.status = "succeeded";
            state.items = action.payload.allMenuItems;
        })
        .addCase(fetchMenu.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        })
    },
});

export default menuSlice.reducer;

