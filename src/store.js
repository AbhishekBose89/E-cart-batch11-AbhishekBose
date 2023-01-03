import cartReducer from "./reducers/cartReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default store

