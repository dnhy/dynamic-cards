// import clsx from "clsx";
import { transactions } from "@/data/data.ts";
import "./index.css";
import GridTitle from "../GridTitle/index.tsx";

const Transactions = () => {
  return (
    <div className="grid-c2">
      <GridTitle title="All Transactions" />

      <div className="grid-c2-content">
        <div className="grid-items">
          {transactions.map((eachData) => (
            <div className="grid-c2-item" key={eachData.id}>
              <div className="grid-item-l">
                <div className="avatar img-fit-cover">
                  <img src={eachData.image} alt="" />
                </div>
                <p className="text">
                  {eachData.name}
                  <span>{eachData.date}</span>
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-scarlet">$ {eachData.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
