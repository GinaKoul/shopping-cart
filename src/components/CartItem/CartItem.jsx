import styles from "./CartItem.module.css";
import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";

const CartItem = ({ id, title = "Item Title", price = 0.0, image }) => {
  const priceRound = Math.ceil(price);
  return (
    <article dataid={id} className={styles.cartItem}>
      <img src={image ? image : null} className={styles.cartItemImg} alt="" />
      <h3>{title}</h3>
      {priceRound > 0 && (
        <>
          <b>
            {price} <span>€</span>
          </b>
          <Button label="Remove" />
        </>
      )}
    </article>
  );
};

CartItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  price: PropTypes.number,
};

export default CartItem;
