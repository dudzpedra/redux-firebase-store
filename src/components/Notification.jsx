import { Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { notificationActions } from "../store/notificationSlice";
const Notification = ({ type, msg }) => {
  const notification = useSelector((state) => state.notification.notification);
  const dispatch = useDispatch()
  const handleClose = () => dispatch(notificationActions.showNotification({
      open: false
  }))
  return (
    <div>
      {notification.open && <Alert onClose={handleClose} severity={type}>{msg}</Alert>}
    </div>
  );
};

export default Notification;
