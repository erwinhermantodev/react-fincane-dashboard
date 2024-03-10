import React from "react";
import styles from "./Analytics.module.css";

const Analytics: React.FC = () => {
  const analyticsData = {
    label: "Account completion",
    percentage: 90,
  };

  const { percentage } = analyticsData;
  const strokeOffset1 = (percentage < 33 ? 0 : percentage > 66 ? 100 : percentage - 33) * 4.4;
  const strokeOffset2 = (percentage < 66 ? 0 : percentage - 66) * 4.4;
  const strokeOffset3 = percentage < 33 ? 0 : 100;

  return (
    <div className={styles.analytics}>
      <h2 className={styles.analyticsTitle}>Analytics</h2>
      <svg className={styles.circleSvg} viewBox="0 0 140 140">
        <circle className={styles.circleBg} cx="70" cy="70" r="60"></circle>
        <circle
          className={styles.circle1}
          cx="70"
          cy="70"
          r="60"
          strokeDasharray="100"
          strokeDashoffset={`${strokeOffset1}`}
        ></circle>
        <circle
          className={styles.circle2}
          cx="70"
          cy="70"
          r="60"
          strokeDasharray="100"
          strokeDashoffset={`${strokeOffset2}`}
        ></circle>
        <circle
          className={styles.circle3}
          cx="70"
          cy="70"
          r="60"
          strokeDasharray="100"
          strokeDashoffset={`${strokeOffset3}`}
        ></circle>
        <text className={styles.circlePercentage} x="50%" y="50%" textAnchor="middle">
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default Analytics;
