import React from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles["main-header"]}>
      <div className={styles["welcome-message"]}>
        <h1>Hello, Jhon D.</h1>
      </div>
      <div className={styles["search-container"]}>
        <FaSearch className={styles["search-icon"]} />
      </div>
    </header>
  );
};

export default Header;
