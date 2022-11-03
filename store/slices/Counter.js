import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        incCounter: (state) => {
            state.count = state.count + 1
        },
        decCounter: (state) => {
            state.count = state.count - 1
        }
    }
})

export const { incCounter, decCounter } = counterSlice.actions
export default counterSlice.reducer
