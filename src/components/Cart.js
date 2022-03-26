import React from "react";
import "./Cart.css";
import {useSelector, useDispatch} from 'react-redux'
import { cartActions } from "../store/cartSlice";

const Cart = () => {
  const quantity = useSelector(state => state.cart.quantity)
  const dispatch = useDispatch()
  const handleShowCart = () => dispatch(cartActions.setShowCart())
  return (
    <div className="cartIcon">
      <h3 onClick={handleShowCart}>Cart: {quantity} {quantity === 1 ? 'item' : 'items'}</h3>
    </div>
  );
};

export default Cart;
