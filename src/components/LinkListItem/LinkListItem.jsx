import styles from "./LinkListItem.module.css";
import { Link } from "react-router-dom";
import { memo } from "react";

const LinkListItem = memo(({ url, children }) => {
  return (
    <li role="none">
      <Link to={url} className={styles.link} role="menuitem">
        {children}
      </Link>
    </li>
  );
});

export default LinkListItem;
