import "./index.css";
// import clsx from "clsx";
import GridCard from "@/components/GridCard";
import Transactions from "@/components/Transactions/index.tsx";
import Report from "@/components/Report/index.tsx";
import Budget from "@/components/Budget/index.tsx";
import Subscriptions from "@/components/Subscriptions/index.tsx";
import Savings from "@/components/Savings/index.tsx";
import Loans from "@/components/Loans/index.tsx";
import FinancialAdvice from "@/components/FinancialAdvice/index.tsx";
import GridLayout from "react-grid-layout";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
      {/* 使用GridLayout重构布局，使其可拖动换位 */}
      <div className="content-grid-one">
        <GridCard />
        <Transactions />
        <Report />
      </div>
      <div className="content-grid-two">
        <Budget />
        <Subscriptions />
        <Savings />
        <Loans />
        <FinancialAdvice />
      </div>
    </div>
  );
};

export default ContentMain;
