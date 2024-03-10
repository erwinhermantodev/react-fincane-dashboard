import React from "react";
import styles from "./PurchasesList.module.css";

const PurchasesList: React.FC = () => {
  return (
    <div className={styles.purchasesList}>
      <h2 className={styles.listTitle}>List of Items to Buy</h2>
      <ul>
        <li className={styles.listItem}>12:00 PM - Buy coffee beans</li>
        <li className={styles.listItem}>05:00 PM - Meet with Esther Howard</li>
      </ul>
    </div>
  );
};

export default PurchasesList;
