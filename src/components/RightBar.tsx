import React from "react";
import ExpenseIncomeSummary from "./ExpenseIncomeSummary";
import LatestSpending from "./LatestSpending";
import PromotionSection from "./PromotionSection";
import styles from "./RightBar.module.css";

const RightBar: React.FC = () => {
  return (
    <aside className={styles["right-bar"]}>
      {" "}
      <ExpenseIncomeSummary />
      <LatestSpending />
      <PromotionSection />
    </aside>
  );
};

export default RightBar;
