import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./src/slices/userSlice";
import cartReducer from "./src/slices/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
