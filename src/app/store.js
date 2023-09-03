import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice"
import blogReducer from "../features/blog/blogSlice"

export const store = configureStore({
    reducer: {
        auth: authSlice,
        blogs: blogReducer,
    }
})