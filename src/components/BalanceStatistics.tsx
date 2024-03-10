// components/BalanceStatistics.js
import React from "react";
import styles from "./BalanceStatistics.module.css";

const BalanceStatistics: React.FC = () => {
  return (
    <div className={styles["balance-statistics"]}>
      <div className={styles["balance-header"]}>
        <h2 className={styles["balance-title"]}>Balance Statistics</h2>
      </div>
      <div className={styles["balance-body"]}>
        <div className={styles["balance-summary"]}>
          <div className={styles["balance-amount"]}>
            <span className={styles["balance-amount-value"]}>$564</span>
            <span className={styles["balance-amount-label"]}>
              Current Balance
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceStatistics;
