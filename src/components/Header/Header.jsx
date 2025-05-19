import styles from "./Header.module.css";
import PropTypes from "prop-types";

const Header = ({ title = "My Store", children }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {title && <h1>{title}</h1>}
        {children}
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Header;
