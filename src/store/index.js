import {configureStore} from '@reduxjs/toolkit'
import authReducer from './authSlice'
import cartSlice from './cartSlice'
import notificationSlice from './notificationSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartSlice.reducer,
        notification: notificationSlice.reducer
    }
})

export default store