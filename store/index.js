import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/Counter";

export const store = configureStore({
    reducer: {
        counter: counterSlice
    }
})
