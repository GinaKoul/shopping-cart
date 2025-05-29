import styles from "./Quantity.module.css";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";

const Quantity = ({ id, value = 1, reset = false, handleQuantityUpdate }) => {
  const [quantity, setQuantity] = useState(value);
  const componentRef = useRef();

  useEffect(() => {
    if (value > 1 && reset) setQuantity(1);
  }, [value, reset]);

  useEffect(() => {
    handleQuantityUpdate &&
      componentRef.current &&
      handleQuantityUpdate(componentRef.current);
  }, [quantity, handleQuantityUpdate]);

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
    <div ref={componentRef} className={styles.quantityField}>
      <label htmlFor={id}>Quantity</label>
      <div className={styles.quantity}>
        <Button
          type="decrease"
          label="-"
          ariaLabel="Decrease quantity"
          handleClick={handleDecrement}
        />
        <input
          id={id}
          className={styles.quantityInput}
          type="text"
          value={quantity}
          onChange={handleChange}
        />
        <Button
          type="increase"
          label="+"
          ariaLabel="Increase quantity"
          handleClick={handleIncrement}
        />
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
