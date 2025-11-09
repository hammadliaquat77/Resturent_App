import {configureStore} from '@reduxjs/toolkit';
import menuReducer from './slices/product.Slice.js';


export const store = configureStore({
    reducer: {
        menu: menuReducer
    }
})

