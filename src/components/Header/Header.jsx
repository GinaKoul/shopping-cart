import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar.jsx";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src="null" alt="logo" />
      </Link>
      <NavBar />
    </header>
  );
};

export default Header;
