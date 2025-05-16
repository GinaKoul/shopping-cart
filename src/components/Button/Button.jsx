import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ type = "primary", label = "Click here", handleClick }) => {
  return (
    <button className={styles[type]} onClick={handleClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  handleClick: PropTypes.func,
};

export default Button;
