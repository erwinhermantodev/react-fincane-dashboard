import React from "react";
import styles from "./PromotionSection.module.css";

const PromotionSection: React.FC = () => {
  return (
    <div className={styles.promotionSection}>
      <div>
        <h2 className={styles.promotionHeader}>Go to premium</h2>
        <p className={styles.promotionContent}>
          Need more features? Upgrade your account to premium and get more
          features!
        </p>
      </div>
      <button className={styles.upgradeButton}>Get now</button>
    </div>
  );
};

export default PromotionSection;
