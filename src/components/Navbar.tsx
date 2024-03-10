import React from "react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyFinance</div>
      <div className={styles.search}>
        <input type="text" placeholder="Search" />
      </div>
      <div className={styles.navItems}>
        <a href="#">Dashboard</a>
        <a href="#">Transactions</a>
        <a href="#">Reports</a>
        <a href="#">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
