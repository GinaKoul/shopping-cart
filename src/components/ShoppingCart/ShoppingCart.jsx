import PropTypes from "prop-types";
import styles from "./ShoppingCart.module.css";
import CartItem from "../CartItem/CartItem";

const ShoppingCart = ({ cartItems }) => {
  return (
    <aside className={styles.cart}>
      <h2>Cart items</h2>
      <ul>
        {cartItems &&
          cartItems.map((item) => (
            <li key={item.id}>
              <CartItem
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
              />
            </li>
          ))}
      </ul>
    </aside>
  );
};

ShoppingCart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default ShoppingCart;
