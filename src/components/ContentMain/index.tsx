import "./index.css";
// import clsx from "clsx";
import GridCard from "@/components/GridCard";
import Transactions from "@/components/Transactions/index.tsx";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <GridCard />
        <Transactions />
        <div className="grid-one-item grid-c3"></div>
      </div>
      <div className="content-grid-two"></div>
    </div>
  );
};

export default ContentMain;
