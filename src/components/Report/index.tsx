import GridTitle from "../GridTitle/index.tsx";
import { reportData } from "@/data/data.ts";
import "./index.css";

const Report = () => {
  return (
    <div className="grid-c3">
      <GridTitle title="Report" />
      <div className="grid-c3-content">
        <div className="grid-chart">
          <div className="chart-vert-value">
            <span>100</span>
            <span>75</span>
            <span>50</span>
            <span>25</span>
            <span>0</span>
          </div>
          {reportData.map((eachData) => (
            <div className="grid-chart-bar" key={eachData.id}>
              <div className="bar-wrapper">
                <div
                  className="bar-item1"
                  style={{ height: eachData.value1 + "%" }}
                ></div>
                <div
                  className="bar-item2"
                  style={{
                    height: eachData.value2 ? eachData.value2 + "%" : 0,
                  }}
                ></div>
              </div>
              <span className="grid-hortz-value">{eachData.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Report;
