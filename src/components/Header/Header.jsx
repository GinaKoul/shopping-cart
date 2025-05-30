import styles from "./Header.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = ({ title = "My Store", showHeaderCart, cartItemsCount }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {title && <h1>{title}</h1>}
        {showHeaderCart && (
          <div className={styles.headerCart}>
            <div className={styles.cartIcon}>
              <svg>
                <use xlinkHref="src/assets/main-v2.svg#cart" />
              </svg>
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
