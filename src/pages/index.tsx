// src/pages/index.tsx

import React from "react";
import Sidebar from "../components/Sidebar";
import RightBar from "../components/RightBar";
import Header from "../components/Header";
import BalanceStatistics from "../components/BalanceStatistics";
import VisaCard from "../components/VisaCard";
import LastTransactions from "../components/LastTransactions";
import Analytics from "../components/Analytics";
import PurchasesList from "../components/PurchasesList";
import ChatConversations from "../components/ChatConversations";

const HomePage: React.FC = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main>
        <Header />
        <div className="balance-statistics-container">
          {" "}
          <BalanceStatistics />
          <VisaCard />
        </div>
        <div className="balance-statistics-container">
          {" "}
          <PurchasesList />
          <ChatConversations />
        </div>
        <div className="balance-statistics-container">
          {" "}
          <LastTransactions />
          <Analytics />
        </div>
      </main>
      <RightBar />
    </div>
  );
};

export default HomePage;
