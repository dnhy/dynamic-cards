// import clsx from "clsx";
import "./index.css";
import GridTitle from "@/components/GridTitle/index.tsx";

const GridCard = () => {
  return (
    <div className="grid-one-item grid-c1 ">
      <GridTitle title="Cards" />

      <div className="grid-c1-content">
        <p>Balance</p>
        <div className="lg-value">$ 22,000</div>
        <div className="card-wrapper">
          <span className="card-hidden">**** **** ****</span>
          <span>1234</span>
        </div>
        <div className="card-bottom">
          <div>
            <p>Expires</p>
            <p>12/22</p>
          </div>
          <div className="card-logo">
            <div className="logo-shape1"></div>
            <div className="logo-shape2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
