import PropTypes from "prop-types";
import styles from "./ShoppingCart.module.css";
import useCartData from "../../hooks/useCartData.jsx";
import CartItem from "../CartItem/CartItem";

const ShoppingCart = ({ cartItemsIds, handleRemoveFromCart }) => {
  const { cartData, cartError, cartLoading } = useCartData(cartItemsIds);

  return (
    <aside className={styles.cart}>
      <h2>Cart items</h2>
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
                image={item.image}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            </li>
          ))}
      </ul>
    </aside>
  );
};

ShoppingCart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  handleRemoveFromCart: PropTypes.func,
};

export default ShoppingCart;
