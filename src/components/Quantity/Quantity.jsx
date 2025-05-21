import { useState } from "react";
import Button from "../Button/Button.jsx";

const Quantity = ({ id }) => {
  const [quantity, setQuantity] = useState(1);

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
    <>
      <label htmlFor={id}>Quantity</label>
      <div>
        <Button label="-" handleClick={handleDecrement} />
        <input id={id} type="text" value={quantity} onChange={handleChange} />
        <Button label="+" handleClick={handleIncrement} />
      </div>
    </>
  );
};

export default Quantity;
