import styles from "./CartItem.module.css";
import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import Quantity from "../Quantity/Quantity.jsx";
import Button from "../Button/Button.jsx";

const CartItem = ({
  id,
  title = "Item Title",
  price = 0.0,
  quantity = 1,
  image,
}) => {
  const { handleRemoveFromCart, handleQuantityUpdate } = useOutletContext();
  const priceRound = Math.ceil(price);

  return (
    <article dataid={id} className={styles.cartItem}>
      <img src={image ? image : null} className={styles.cartItemImg} alt="" />
      <div className={styles.cartItemDetails}>
        <h3>{title}</h3>
        {priceRound > 0 && (
          <b className="price">
            {price} <span>€</span>
          </b>
        )}
      </div>
      {priceRound > 0 && (
        <>
          <Quantity
            type="cartItemQuantity"
            id={"cardQuantity" + id}
            value={quantity}
            handleQuantityUpdate={handleQuantityUpdate}
          />
          <Button label="Remove" handleClick={handleRemoveFromCart} />
        </>
      )}
    </article>
  );
};

CartItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  image: PropTypes.string,
};

export default CartItem;
