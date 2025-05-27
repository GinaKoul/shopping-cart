import styles from "./Quantity.module.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";

const Quantity = ({ id, value = 1, reset = false }) => {
  const [quantity, setQuantity] = useState(value);

  useEffect(() => {
    if (value > 1 && reset) setQuantity(1);
  }, [value, reset]);

  const handleChange = (e) => {
    setQuantity(parseInt(e.target.value) || "");
  };

  const handleDecrement = () => {
    const newQuantity = quantity === "" ? 1 : quantity - 1;
    newQuantity > 0 && setQuantity(newQuantity);
  };

  const handleIncrement = () => {
    setQuantity(quantity === "" ? 1 : quantity + 1);
  };

  return (
    <div className={styles.quantityField}>
      <label htmlFor={id}>Quantity</label>
      <div className={styles.quantity}>
        <Button type="decrease" label="-" handleClick={handleDecrement} />
        <input
          id={id}
          className={styles.quantityInput}
          type="text"
          value={quantity}
          onChange={handleChange}
        />
        <Button type="increase" label="+" handleClick={handleIncrement} />
      </div>
    </div>
  );
};

Quantity.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.number,
  reset: PropTypes.bool,
};

export default Quantity;
