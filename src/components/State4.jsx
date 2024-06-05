import React, { useContext } from "react";
import "./State4.css";

import { addonsContext } from "../App";
import { planContext } from "../App";
import { isMonthlyContext } from "../App";

const State4 = () => {
  const { isMonthly, toggleIsMonthly } = useContext(isMonthlyContext);
  const { addons } = useContext(addonsContext);
  const { plan, planPrice } = useContext(planContext);
  // console.log(addons)
  let totalprice = 0;

  addons.map((add) => (totalprice = totalprice + add.price));

  return (
    <>
      <div className="header">
        <h1>Finishing up</h1>
        <p className="paragraph">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="calcultaion">
        <div className="price1">
          <div className="choosenplan">
            <p className="a">{plan}{isMonthly ? " (Monthly)" : " (Yearly)"}</p>
            <span className="b change" onClick={toggleIsMonthly}>
              <u>Change</u>
            </span>
          </div>
          {isMonthly && <div className="money">${planPrice}/mo</div>}
          {!isMonthly && <div className="money">${planPrice * 10}/yr</div>}
        </div>
        {addons != "" && <hr className="hr" />}
        <div>
          {addons.map((add, index) => (
            <div key={index} className="additional-plan">
              <div className="service">
                <p className="a">{add.service}</p>
              </div>
              <div className="charge">
                {isMonthly && <p className="b">+${add.price}/mo</p>}
                {!isMonthly && <p className="b">+${add.price * 10}/yr</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="total">
        {isMonthly && <div className="a">Total(per month)</div>}
        {isMonthly && <div className="b">${planPrice + totalprice}/mo</div>}
        {!isMonthly && <div className="a">Total(per year)</div>}
        {!isMonthly && (
          <div className="b">${(planPrice + totalprice) * 10}/yr</div>
        )}
      </div>
    </>
  );
};

export default State4;
