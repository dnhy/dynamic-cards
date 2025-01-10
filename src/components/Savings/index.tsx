import GridTitle from "../GridTitle/index.tsx";
import "./index.css";
import { savings } from "@/data/data.ts";

const Savings = () => {
  return (
    <div className="grid-c6">
      <GridTitle title="Savings" />
      <div className="grid-c6-content">
        <div className="fees">
          {savings.map((eachData) => (
            <div className="saving-item">
              <div className="saving-top" key={eachData.id}>
                <div className="fee-l">
                  <div className="avatar">
                    <img src={eachData.image} alt="" />
                  </div>
                  <p className="text-silver-v1">{eachData.title}</p>
                </div>
                <div className="fee-r text-silver-v1">
                  $ {eachData.saving_amount}
                </div>
              </div>
              <div className="saving-bottom">
                <div className="saving-badges">
                  <span className="badge-item">Date taken 23/12/22</span>
                  <span className="badge-item">Amount left $ 40000</span>
                </div>
                <div className="saving-progress">
                  <div className="saving-fill" style={{ width: "50%" }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Savings;
