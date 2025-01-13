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
// import Demo from "@/components/Demo";
import { Responsive, WidthProvider } from "react-grid-layout";
import { useState } from "react";

const ContentMain = () => {
  // const layout1 = [
  //   { i: "a", x: 0, y: 0, w: 1, h: 1, static: true },
  //   { i: "b", x: 1, y: 0, w: 1, h: 1, minW: 1, maxW: 2, minH: 1, maxH: 2 },
  //   { i: "c", x: 2, y: 0, w: 1, h: 1 },
  //   { i: "d", x: 3, y: 0, w: 1, h: 1 },
  // ];
  const layout1 = [
    { i: "GridCard", x: 0, y: 0, w: 1, h: 2 },
    { i: "Transactions", x: 1, y: 0, w: 1, h: 2 },
    { i: "Report", x: 2, y: 0, w: 1, h: 2 },
    { i: "Budget", x: 0, y: 2, w: 1, h: 3 },
    { i: "Subscriptions", x: 1, y: 2, w: 1, h: 3 / 2 },
    { i: "Savings", x: 1, y: 3.5, w: 1, h: 3 / 2 },
    { i: "Loans", x: 2, y: 2, w: 1, h: 3 / 2 },
    { i: "FinancialAdvice", x: 2, y: 3.5, w: 1, h: 3 / 2 },
  ];
  const layout2 = [
    { i: "GridCard", x: 0, y: 0, w: 1, h: 2 },
    { i: "Transactions", x: 1, y: 0, w: 1, h: 2 },
    { i: "Report", x: 0, y: 1, w: 2, h: 2 },
    { i: "Budget", x: 0, y: 3, w: 1, h: 4 },
    { i: "Subscriptions", x: 1, y: 3, w: 1, h: 2 },
    { i: "Savings", x: 1, y: 4, w: 1, h: 2 },
    { i: "Loans", x: 0, y: 8, w: 1, h: 2 },
    { i: "FinancialAdvice", x: 1, y: 8, w: 1, h: 2 },
  ];
  const layout3 = [
    { i: "GridCard", x: 0, y: 0, w: 1, h: 2 },
    { i: "Transactions", x: 1, y: 1, w: 1, h: 2 },
    { i: "Report", x: 0, y: 2, w: 2, h: 2 },
    { i: "Budget", x: 0, y: 3, w: 1, h: 4 },
    { i: "Subscriptions", x: 1, y: 4, w: 1, h: 2 },
    { i: "Savings", x: 1, y: 5, w: 1, h: 2 },
    { i: "Loans", x: 0, y: 6, w: 1, h: 2 },
    { i: "FinancialAdvice", x: 1, y: 7, w: 1, h: 2 },
  ];
  const layouts = { lg: layout1, md: layout2, sm: layout3 };
  const ResponsiveGridLayout = WidthProvider(Responsive);

  const [compactType, setCompactType] = useState("horizontal");

  function onLayoutChange() {
    // console.log(layout1);
  }
  function onWidthChange(containerWidth: number) {
    console.log(containerWidth);
    if (containerWidth < 1000) {
      setCompactType("vertical");
    } else {
      setCompactType("horizontal");
    }
  }
  return (
    <>
      {/* <Demo />{" "} */}
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 1000, sm: 711 }}
        cols={{ lg: 3, md: 2, sm: 1 }}
        autoSize={true}
        rowHeight={150}
        onLayoutChange={onLayoutChange}
        onWidthChange={onWidthChange}
        compactType={compactType}
      >
        <div key="GridCard">
          <GridCard />
        </div>
        <div key="Transactions">
          <Transactions />
        </div>
        <div key="Report">
          <Report />
        </div>
        <div key="Budget">
          <Budget />
        </div>
        <div key="Subscriptions">
          <Subscriptions />
        </div>
        <div key="Loans">
          <Loans />
        </div>
        <div key="Savings">
          <Savings />
        </div>
        <div key="FinancialAdvice">
          <FinancialAdvice />
        </div>
      </ResponsiveGridLayout>
    </>
  );
};

export default ContentMain;
