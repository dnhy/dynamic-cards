import { budget } from "@/data/data.ts";
import GridTitle from "@/components/GridTitle/index.tsx";
import { iconsImgs } from "../../utils/images.ts";
import "./index.css";

const Budget = () => {
  return (
    <div className="grid-c4">
      <GridTitle title="Budget" />
      <div className="grid-c-top text-sliver-v1">
        <h2 className="lg-value">Cash</h2>
        <span className="lg-value">$ 100,00</span>
      </div>
      <div className="grid-c4-content bg-jet">
        <div className="grid-items">
          {budget.map((eachData) => (
            <div className="gird-item">
              <div className="grid-item-l">
                <div className="icon">
                  <img src={iconsImgs.check} alt="check" />
                </div>
                <p className="text text-silver-v1">
                  {eachData.title}
                  <span>{eachData.type}</span>
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-silver-v1">$ {eachData.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budget;
