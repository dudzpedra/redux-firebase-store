import { notificationActions } from "./notificationSlice";
import addProducts, { getProducts } from "../services/api";
import { cartActions } from "./cartSlice";

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const res = await getProducts();
      dispatch(cartActions.replaceData(res));
    } catch (error) {
      console.error(error);
      dispatch(
        notificationActions.showNotification({
          msg: "Could not send request to database",
          type: "error",
          open: true,
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      notificationActions.showNotification({
        msg: "Sending request to database",
        type: "warning",
        open: true,
      })
    );
    try {
      await addProducts(cart);
      dispatch(
        notificationActions.showNotification({
          msg: "Sent request to database successfully.",
          type: "success",
          open: true,
        })
      );
    } catch (error) {
      dispatch(
        notificationActions.showNotification({
          msg: "Could not send request to database",
          type: "error",
          open: true,
        })
      );
    }
  };
};
