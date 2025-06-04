import styles from "./ShoppingCart.module.css";
import { useOutletContext } from "react-router-dom";
import { useMemo } from "react";
import useCartData from "../../hooks/useCartData.jsx";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button.jsx";

const ShoppingCart = () => {
  const {
    cartItemsIds,
    quantities,
    handleRemoveFromCart,
    handleQuantityUpdate,
    handleCartReset,
  } = useOutletContext();
  const { cartData, cartError, cartLoading } = useCartData(cartItemsIds);

  const total = useMemo(
    () =>
      cartData.reduce(
        (total, item) => total + item.price * (quantities.get(item.id) || 1),
        0
      ),
    [cartData, quantities]
  );

  return (
    <>
      <section className={styles.cart}>
        <h3>Cart items</h3>
        {cartLoading && <p>Loading ...</p>}
        {cartError && <p>{cartError}</p>}
        <ul>
          {cartData &&
            cartData.map((item) => (
              <li key={item.id}>
                <CartItem
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  quantity={quantities.get(item.id) || 1}
                  image={item.image}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleQuantityUpdate={handleQuantityUpdate}
                />
              </li>
            ))}
        </ul>
      </section>
      <section className={styles.checkout}>
        <h3>Total</h3>
        <b className="price">
          {total.toFixed(2)} <span>€</span>
        </b>
        <Button label="Buy Products" handleClick={handleCartReset} />
      </section>
    </>
  );
};

export default ShoppingCart;
