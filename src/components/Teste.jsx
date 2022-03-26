import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import { cartActions } from "../store/cartSlice";

const Teste = () => {
  const signed = useSelector((state) => state.auth.signed);
  const dispatch = useDispatch();
  const signIn = () => dispatch(authActions.signIn());
  const signOut = () => dispatch(authActions.signOut());

  const cart = useSelector((state) => state.cart);
  const addItem = () => {
    dispatch(cartActions.add({ price: 50, title: 'shirt', id: cart.items.length + 1 }));
  };
  const toggleShowCart = () => dispatch(cartActions.setShowCart());
  return (
    <div>
      <button onClick={signIn}>sign in</button>
      <button onClick={signOut}>sign out</button>
      {signed ? "user signed in" : "user signed out"}
      <button onClick={toggleShowCart}>toggle show cart</button>
      <p>show cart: {cart.showCart ? "true" : "false"}</p>
      {cart.showCart && (
        <div>
          <p>total: $ {cart.total}</p>
          <p>
            quantity: {cart.quantity} {cart.quantity === 1 ? "item" : "items"}
          </p>
        </div>
      )}
      <button onClick={addItem}>add to cart</button>
      {cart.items.map((i) => (
          <div key={i}>
              <p>{i.name} $ {i.price}</p>
              <p>quantity: {i.quantity}</p>
          </div>
      ))}
    </div>
  );
};

export default Teste;
