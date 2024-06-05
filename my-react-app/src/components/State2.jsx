import React, { useContext } from "react";
import { useState } from "react";

import A from "/pro.svg";
import B from "/advanced.svg";
import C from "/arcade.svg";

import "./State2.css";

import { isMonthlyContext } from "../App";
import { planContext } from "../App";

const state2 = () => {
  const image = [A, B, C];
  const { isMonthly, toggleIsMonthly } = useContext(isMonthlyContext);
  const { plan, planerror, setPlanError,togglePlan } = useContext(planContext);
  const plan1 = ["Arcade", "Advanced", "Pro"];

  const price = [9, 12, 15];

  return (
    <>
      <div className="state2">
        <div className="header">
          <h1>Select your plan</h1>
          <p className="paragraph">
            You have the option of monthly or yearly billing.
          </p>
        </div>
        <div className="selectplan">
          {plan1.map((plans, index) => (
            <div
              key={index}
              className={`plan ${plan===plans ? 'selected' : 'notselected'}`}
              onClick={() => {togglePlan(plan1[index], price[index]);
                setPlanError(false)
              }}
            >
              <img className="img" src={image[index]} alt="plan" />
               <div className="innerplan">
              <p className="plantype">{plans}</p>
              {isMonthly && <p className="price1">${price[index]}/mo</p>}
              {!isMonthly && <p className="price1">${price[index] * 10}/yr</p>}
              {!isMonthly && <p className="yearly">2 months free</p>}
              </div>
            </div>
          ))}
          
        </div>
        <div className="pricetype">
          <div className="monthly">month</div>
          <div className="toggle">
            <label className="switch">
              <input
                type="checkbox"
                checked={!isMonthly}
                onChange={toggleIsMonthly}
              />
              <span className="slider" />
            </label>
          </div>
          <div className="year">year</div>
        </div>
        {planerror && <p className="planerror" style={{color:"red"}}>select plan</p>}
      </div>
    </>
  );
};

export default state2;
