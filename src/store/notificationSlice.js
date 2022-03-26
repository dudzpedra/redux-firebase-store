import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: { notification: null },
    reducers: {
        showNotification(state, action) {
            state.notification = {
                msg: action.payload.msg,
                type: action.payload.type,
                open: action.payload.open
            }
        }
    }
})

export const notificationActions = notificationSlice.actions
export default notificationSlice