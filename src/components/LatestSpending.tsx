import React from "react";
import { FaMoneyBillAlt } from "react-icons/fa";
import styles from "./LatestSpending.module.css";

const LatestSpending: React.FC = () => {
  return (
    <div className={styles.latestSpending}>
      <h2>Latest Spending</h2>
      <ul className={styles.spendingList}>
        <li>
          <FaMoneyBillAlt className={styles.icon} /> Online store - $150
        </li>
        <li>
          <FaMoneyBillAlt className={styles.icon} /> Coffee shop - $25
        </li>
        <li>
          <FaMoneyBillAlt className={styles.icon} /> Groceries - $75
        </li>
      </ul>
    </div>
  );
};

export default LatestSpending;
