import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 20 }

const featureSlice = createSlice({
    name: 'feature',
    initialState,
    reducers: {
        getValue(state, action) {
            return state.value
        }
    }
})

export const actions = featureSlice.actions
export default featureSlice.reducer