import styles from "./Button.module.css";
import PropTypes from "prop-types";
import debounce from "../../functions/debounce";

const Button = ({
  type = "primary",
  label = "Click here",
  ariaLabel,
  handleClick,
}) => {
  return (
    <button
      className={styles[type]}
      aria-label={ariaLabel || label}
      onClick={debounce((e) => handleClick(e))}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  handleClick: PropTypes.func,
};

export default Button;
