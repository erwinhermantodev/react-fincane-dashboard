import React from "react";
import styles from "./RecentSpending.module.css";

const RecentSpending: React.FC = () => {
  return (
    <div className={styles["recent-spending"]}>
      {" "}
      <h2>Latest Spending</h2>
      <ul>
        <li>Online store - $120</li>
      </ul>
    </div>
  );
};

export default RecentSpending;
