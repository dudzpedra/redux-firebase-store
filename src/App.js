import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from "react";
import Notification from "./components/Notification";
import { sendCartData } from "./store/cartActions";

let isFirstRender = true

function App() {
  const signed = useSelector(state => state.auth.signed)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.notification.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false
      return
    }
    if (cart.changed) {
      dispatch(sendCartData(cart))
    }
  }, [cart, dispatch])

  return (
    <div className="App">
      {notification && <Notification type={notification.type} msg={notification.msg} />}
      {signed ? <Layout /> : <Auth />}
    </div>
  );
}

export default App;
