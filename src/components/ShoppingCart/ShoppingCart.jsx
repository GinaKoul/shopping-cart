import PropTypes from "prop-types";
import styles from "./ShoppingCart.module.css";
import useCartData from "../../hooks/useCartData.jsx";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button.jsx";

const ShoppingCart = ({
  cartItemsIds = [],
  quantities,
  handleRemoveFromCart,
  handleQuantityUpdate,
  handleCartReset,
}) => {
  const { cartData, cartError, cartLoading } = useCartData(cartItemsIds);

  const total = cartData.reduce(
    (total, item) => total + item.price * (quantities.get(item.id) || 1),
    0
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

ShoppingCart.propTypes = {
  cartItemsIds: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  quantities: PropTypes.objectOf(PropTypes.number),
  handleRemoveFromCart: PropTypes.func,
  handleQuantityUpdate: PropTypes.func,
};

export default ShoppingCart;
