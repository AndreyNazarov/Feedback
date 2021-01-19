import s from "./Notification.css";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return <h2 className={s.notification}>{message}</h2>;
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
