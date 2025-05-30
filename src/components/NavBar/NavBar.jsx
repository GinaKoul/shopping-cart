import PropTypes from "prop-types";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = ({ items }) => {
  return (
    <nav aria-label="Main navigation" className={styles.nav}>
      <details id="nav-menu" className={styles.details}>
        <summary
          tabIndex="0"
          aria-controls="nav-links"
          aria-expanded="false"
          className={styles.summary}
        >
          <h2>Menu</h2>
        </summary>
        <ul id="nav-links" role="menu">
          {items &&
            items.map((item) => (
              <li key={item.name} role="none">
                <Link to={item.url} className={styles.link} role="menuitem">
                  {item.name}
                </Link>
              </li>
            ))}
        </ul>
      </details>
    </nav>
    // <details>
    //   <summary className={styles.summary}>
    //     <h2>Menu</h2>
    //   </summary>
    //   <nav className={styles.nav}>
    //     {items &&
    //       items.map((item) => (
    //         <Link key={item.name} to={item.url} className={styles.link}>
    //           {item.name}
    //         </Link>
    //       ))}
    //   </nav>
    // </details>
  );
};

NavBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default NavBar;
