import React from "react";
import styles from "./ExpenseIncomeSummary.module.css";

const ExpenseIncomeSummary: React.FC = () => {
  return (
    <div className={styles.expenseIncomeSummary}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>Expenses and Income</h2>
      </div>
      <div className={styles.summaryContainer}>
        <div className={styles.labelContainer}>
          <div className={styles.label}>Expenses</div>
          <div className={styles.label}>Income</div>
        </div>
        <div className={styles.labelContainer}>
          <div className={styles.label}>75%</div>
          <div className={styles.label}>25%</div>
        </div>
        <div className={styles.barContainer}>
          <div
            className={`${styles.bar} ${styles.expenseBar}`}
            style={{ width: "75%" }}
          ></div>
          <div
            className={`${styles.bar} ${styles.incomeBar}`}
            style={{ width: "25%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseIncomeSummary;
