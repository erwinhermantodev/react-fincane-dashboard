import React from "react";
import {
  FaTachometerAlt,
  FaCreditCard,
  FaChartBar,
  FaClipboardList,
  FaCog,
  FaPowerOff,
} from "react-icons/fa";
import styles from "./Sidebar.module.css";

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      {" "}
      <div className={styles["sidebar-header"]}>
        {" "}
        <div className={styles["user-info"]}>
          {" "}
          <div className={styles.avatar}></div>
          <div className={styles["user-text"]}>
            {" "}
            <h3>S.</h3>
          </div>
        </div>
      </div>
      <nav className={styles["nav-menu"]}>
        {" "}
        <ul>
          <li className={styles["nav-item"]}>
            {" "}
            <FaTachometerAlt className={styles.icon} />{" "}
          </li>
          <li className={styles["nav-item"]}>
            {" "}
            <FaCreditCard className={styles.icon} />{" "}
          </li>
          <li className={styles["nav-item"]}>
            {" "}
            <FaChartBar className={styles.icon} />{" "}
          </li>
          <li className={styles["nav-item"]}>
            {" "}
            <FaClipboardList className={styles.icon} />{" "}
          </li>
        </ul>
      </nav>
      <div className={styles["sidebar-footer"]}>
        {" "}
        <ul>
          <li className={styles["nav-item"]}>
            {" "}
            <FaCog className={styles.icon} />{" "}
          </li>
          <li className={styles["nav-item"]}>
            {" "}
            <FaPowerOff className={styles.icon} />{" "}
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
