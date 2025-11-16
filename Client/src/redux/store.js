import {configureStore} from '@reduxjs/toolkit';
import menuReducer from './slices/product.Slice.js';
import cartReducer from './slices/cart.Slice.js'


export const store = configureStore({
    reducer: {
        menu: menuReducer,
        cart: cartReducer
    }
})

