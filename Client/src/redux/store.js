import {configureStore} from '@reduxjs/toolkit';
import menuReducer from './slices/product.Slice.js';
import cartReducer from './slices/cart.Slice.js'
import usersReducer from "./slices/user.Slice.js";
import orderReducer from "./slices/order.Slice.js";

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        cart: cartReducer,
        users: usersReducer,
        orders: orderReducer
    }
})

