import styles from "./Card.module.css";
import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import Quantity from "../Quantity/Quantity.jsx";
import Button from "../Button/Button.jsx";

const Card = ({ id, title = "Item Title", price = 0.0, image, isInCart }) => {
  const { quantities, handleAddToCart } = useOutletContext();

  const priceRound = Math.ceil(price);
  return (
    <article dataid={id} className={styles.card}>
      <img src={image ? image : null} className={styles.cardImg} alt="" />
      <h3>{title}</h3>
      {priceRound > 0 && (
        <>
          <b className={styles.price}>
            {price} <span>€</span>
          </b>
          {isInCart && <p>Product is added to Cart</p>}
          {!isInCart && (
            <>
              <Quantity
                id={"cardQuantity" + id}
                className={styles.cardQuantity}
                value={quantities.get(id) || 1}
                reset={true}
              />
              <Button label="Add To Cart" handleClick={handleAddToCart} />
            </>
          )}
        </>
      )}
    </article>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};

export default Card;
