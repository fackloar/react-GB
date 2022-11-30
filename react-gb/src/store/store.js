import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authSlice from "./authSlice";
import chatSlice from "./chatSlice.js";

export default configureStore({
  reducer: {
    counter: counterReducer,
    chat: chatSlice,
    auth: authSlice
  },
  devTools: true,
});
