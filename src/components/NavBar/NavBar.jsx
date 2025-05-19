import PropTypes from "prop-types";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = ({ items }) => {
  return (
    <nav className={styles.nav}>
      {items &&
        items.map((item) => (
          <Link key={item.name} to={item.url} className={styles.link}>
            {item.name}
          </Link>
        ))}
    </nav>
  );
};

NavBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default NavBar;
