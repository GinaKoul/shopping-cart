import styles from "./NavBar.module.css";
import { memo } from "react";
import PropTypes from "prop-types";
import LinkListItem from "../LinkListItem/LinkListItem.jsx";
import isMobile from "../../functions/isMobile";

const NavBar = memo(({ items }) => {
  return (
    <nav aria-label="Main navigation" className={styles.nav}>
      <details id="nav-menu" open={!isMobile()} className={styles.details}>
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
              <LinkListItem key={item.name} url={item.url}>
                {item.name}
              </LinkListItem>
            ))}
        </ul>
      </details>
    </nav>
  );
});

NavBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default NavBar;
