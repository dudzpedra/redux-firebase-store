import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>No items adeed to cart.</p>}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <CartItem id={item.id} price={item.price} name={item.name} quantity={item.quantity} total={item.totalPrice} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
