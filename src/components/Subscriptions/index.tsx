import "./index.css";
import { subscriptions } from "@/data/data.ts";
import GridTitle from "@/components/GridTitle/index.tsx";
import { iconsImgs } from "@/utils/images.ts";

const Subscriptions = () => {
  return (
    <div className="grid-c5">
      <GridTitle title="Subscriptions" />
      <div className="grid-c5-content">
        <div className="grid-items">
          {subscriptions.map((eachData) => (
            <div className="grid-item">
              <div className="grid-item-l">
                <div className="icon">
                  <img src={iconsImgs.alert} alt="" />
                </div>
                <p className="due-data">
                  {eachData.title}
                  <span> due {eachData.due_date}</span>
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

export default Subscriptions;
