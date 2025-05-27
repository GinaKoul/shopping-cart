// import styles from "./Checkout.module.css";
import { useOutletContext } from "react-router-dom";
import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";

const Checkout = () => {
  const { cartItemsIds, quantities, handleRemoveFromCart, handleCartReset } =
    useOutletContext();

  return (
    <article>
      <h2>Checkout</h2>
      <ShoppingCart
        cartItemsIds={cartItemsIds}
        quantities={quantities}
        handleRemoveFromCart={handleRemoveFromCart}
        handleCartReset={handleCartReset}
      />
    </article>
  );
};

export default Checkout;
