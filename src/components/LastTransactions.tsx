import React from "react";
import styles from "./LastTransactions.module.css";

const LastTransactions: React.FC = () => {
  const transactions = [
    { id: 1, name: "Daily Groceries", amount: -20.75 },
    { id: 2, name: "Monthly Rent", amount: -1200 },
    { id: 3, name: "Salary", amount: 3000 },
    { id: 4, name: "Book Sales", amount: 150 },
  ];

  return (
    <div className={styles.transactionsList}>
      <h2 className={styles.transactionsTitle}>Last Transactions</h2>
      <div className={styles.transactionsSort}>
        <button>Newest</button>
        <button>Oldest</button>
      </div>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className={styles.transactionItem}>
            <span className={styles.transactionName}>{transaction.name}</span>
            <span className={styles.transactionAmount}>
              {transaction.amount.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LastTransactions;
