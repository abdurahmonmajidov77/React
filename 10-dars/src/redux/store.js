import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./user/index"

export const store = configureStore({
    reducer: {
        user: UserSlice
    }
})