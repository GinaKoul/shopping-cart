import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon.jsx";

const Header = ({ title = "My Store", showHeaderCart, cartItemsCount }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {title && <h1>{title}</h1>}
        {showHeaderCart && (
          <div className={styles.headerCart}>
            <div className={styles.cartIcon}>
              <Icon id="cart" width="32" height="32" />
              <span className={styles.cartItemsCounter}>{cartItemsCount}</span>
            </div>
            <Link to="/checkout" className={"button " + styles.headerBtn}>
              Cart
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  showHeaderCart: PropTypes.bool,
  cartItemsCount: PropTypes.number,
};

export default Header;
