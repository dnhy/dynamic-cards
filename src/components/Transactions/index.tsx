// import clsx from "clsx";
import { iconsImgs } from "@/utils/images.ts";
import { transactions } from "@/data/data.ts";
import "./index.css";

const Transactions = () => {
  return (
    <div className="grid-c2">
      <div className="grid-c-title">
        <h3>All Transactions</h3>
        <button>
          <img src={iconsImgs.plus} alt="" />
        </button>
      </div>
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
