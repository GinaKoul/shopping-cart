import styles from "./Card.module.css";
import PropTypes from "prop-types";
import Quantity from "../Quantity/Quantity.jsx";
import Button from "../Button/Button.jsx";

const Card = ({
  id,
  title = "Item Title",
  price = 0.0,
  quantity,
  image,
  handleAddToCart,
}) => {
  const priceRound = Math.ceil(price);
  return (
    <article dataid={id} className={styles.card}>
      <img src={image ? image : null} className={styles.cardImg} alt="" />
      <h3>{title}</h3>
      {priceRound > 0 && (
        <>
          <b>
            {price} <span>€</span>
          </b>
          <Quantity id={"cardQuantity" + id} value={quantity} reset={true} />
          <Button label="Add To Cart" handleClick={handleAddToCart} />
        </>
      )}
    </article>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  image: PropTypes.string,
  handleAddToCart: PropTypes.func,
};

export default Card;
