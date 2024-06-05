import React, { useContext } from "react";

import "./State3.css";

import { addonsContext } from "../App";
import { isMonthlyContext } from "../App";

const State3 = () => {
  const { addons, toggleAddOns } = useContext(addonsContext);
  const { isMonthly} = useContext(isMonthlyContext);

  // const services = ["Online service","Larger storage","Customizable Profile"]
  // const alt = ["Access to multiplayer games","Extra 1TB of cloud save","Custom theme on your profile"]
  // const price = [1,2,2]
  const info = [
    {
      service: "Online service",
      alt: "Access to multiplayer games",
      price: 1,
    },
    {
      service: "Larger storage",
      alt: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      service: "Customizable Profile",
      alt: "Custom theme on your profile",
      price: 2,
    },
  ];

  return (
    <>
      <div className="header">
        <h1>Pick add-ons</h1>
        <p className="paragraph">
          Add ons help enhance your gaming experience.
        </p>
      </div>
      <div className="checkbox">
        {info.map((infos, index) => (
          <label htmlFor={index}>
            <div className={`state3 ${addons.some(
                      (selectedAddon) => selectedAddon.service === infos.service
                    ) ? "addselected" :  "addnotselected"}`} key={index}>
              <div className="state33">
                <div className="check">
                  <input
                    type="checkbox"
                    id={index}
                    checked={addons.some(
                      (selectedAddon) => selectedAddon.service === infos.service
                    )}
                    onChange={() => toggleAddOns(infos)}
                  ></input>
                </div>
                <div className="services">
                  <p>{infos.service}</p>
                  <p className="alt">{infos.alt}</p>
                </div>
              </div>
              {isMonthly && <div className="price">${infos.price}/mo</div>}
              {!isMonthly && (
                <div className="price">${infos.price * 10}/yr</div>
              )}
            </div>
          </label>
        ))}
        
      </div>
    </>
  );
};

export default State3;
