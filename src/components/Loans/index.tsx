import GridTitle from "@/components/GridTitle/index.tsx";
import "./index.css";
import CircleProgress from "../CircleProgress/index.tsx";
import { useState } from "react";

const Loans = () => {
  const [progress] = useState(50);
  return (
    <div className="grid-c7 grid-c-wrap">
      <GridTitle title="Loans" />
      <div className="grid-c7-content">
        <div className="grid-l">
          <CircleProgress progress={progress} />
        </div>
        <div className="grid-r text-silver-v1">
          <div className="grid-r-item">
            <div className="tit">Savings Target</div>
            <div className="con">$ 500,000</div>
          </div>
          <div className="grid-r-item">
            <div className="tit">Savings Target</div>
            <div className="con">$ 500,000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loans;
