import React from "react";
import { FaCcVisa } from "react-icons/fa";
import styles from "./VisaCard.module.css";

const VisaCard: React.FC = () => {
  return (
    <div className={styles.visaCard}>
      <FaCcVisa className={styles.visaLogo} />
      <div className={styles.cardDetails}>
        <p className={styles.cardNumber}>**** **** **** 1234</p>
        <p className={styles.cardHolderName}>Jhon D.</p>
        <p className={styles.cardExpiry}>Expires 08/24</p>
      </div>
    </div>
  );
};

export default VisaCard;
