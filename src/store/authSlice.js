import { createSlice } from "@reduxjs/toolkit";

const initialState = { signed: false}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn(state) {
            state.signed = true
        },
        signOut(state) {
            state.signed = false
        }
    }
})

export const authActions = authSlice.actions
export default authSlice.reducer