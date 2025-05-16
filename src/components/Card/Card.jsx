import styles from "./Card.module.css";
import PropTypes from "prop-types";
import Button from "../Button/Button.jsx";

const Card = ({ id, title = "Item Title", price = 0.0, image }) => {
  return (
    <article dataid={id} className={styles.card}>
      <img src={image ? image : null} className={styles.cardImg} alt="" />
      <h3>{title}</h3>
      <b>
        {price} <span>€</span>
      </b>
      <Button label="Add To Cart" />
    </article>
  );
};

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  price: PropTypes.number,
};

export default Card;
