import React, { createContext, useRef, useState } from "react";
import background from "/left.svg";
import List from "./components/list.jsx";
import State1 from "./components/State1.jsx";
import State2 from "./components/State2.jsx";
import State3 from "./components/State3.jsx";
import State4 from "./components/State4.jsx";
import Thankyou from "./components/Thankyou.jsx";
import "./components/list.jsx";

export const isMonthlyContext = createContext();
export const counterContext = createContext();
export const planContext = createContext();
export const addonsContext = createContext();

const App = () => {
  const [counter, setCounter] = useState(0);
  const [addons, setAddons] = useState([]);
  const [plan, setPlan] = useState('');
  const [planerror, setPlanError] = useState(false);
  const [planPrice, setPlanPrice] = useState();
  const [isMonthly, setIsMonthly] = useState(true);
  const [formdata, setFormData] = useState({ name: "", email: "", phone: "" });

  const state1Ref = useRef();

  const handleFormData = (data) => {
    setFormData({ ...data });
  };

  const toggleAddOns = (newAddon) => {
    setAddons((prevAddons) => {
      const exists = prevAddons.find(
        (addon) => addon.service === newAddon.service
      );
      return exists
        ? prevAddons.filter((addon) => addon.service !== newAddon.service)
        : [...prevAddons, newAddon];
    });
  };

  const toggleIsMonthly = () => {
    setIsMonthly(!isMonthly);
  };

  const togglePlan = (newPlan, newPrice) => {
    setPlan(newPlan);
    setPlanPrice(newPrice);
  };
  // const handlePlanerror = () => {
  //   if (plan == null) {
  //     setPlanError(true);
  //   }
  //   else{
  //     setPlanError(false);
  //   }
  // }

  const handleNext = () => {
    setCounter(counter + 1);
    if (counter == 4) {
      setCounter(4);
    }
    if(plan == ''){
      setPlan(null);
    }
    if (plan == null) {
      setCounter(1);
      setPlanError(true);
    }
    // handlePlanerror();
  }

  const handleBack = () => {
    setCounter(counter - 1);
    if (counter == 0) {
      setCounter(0);
    }
  };

  const handleSubmitInState1 = () => {
    if (state1Ref.current) {
      state1Ref.current.handleSubmit();
    }
  };

  let word = "Next Step";
  if (counter == 3) {
    word = "Confirm";
  }

  return (
    <addonsContext.Provider value={{ addons, toggleAddOns }}>
      <planContext.Provider value={{ plan, planerror, setPlanError, planPrice, togglePlan }}>
        <isMonthlyContext.Provider value={{ isMonthly, toggleIsMonthly }}>
          <counterContext.Provider
            value={{ formdata, handleFormData, handleNext }}
          >
            <div className="container">
              <div
                className="left-section"
                style={{
                  // backgroundImage: `url(${background})`,
                  // borderRadius: "7px",
                  backgroundSize: 'cover',
                }}
              >
                <List state={counter} />
              </div>
              <div className="right">
                <div className="right-section">
                  {counter === 0 && <State1 ref={state1Ref} />}
                  {counter === 1 && <State2 />}
                  {counter === 2 && <State3 />}
                  {counter === 3 && <State4 />}
                  {counter === 4 && <Thankyou />}
                </div>
                {counter != 4 && (
                  <div className="buton">
                    {counter != 0 && (
                      <button className="goback" onClick={handleBack}>
                        Go back
                      </button>
                    )}
                    {counter === 0 && (
                      <button className="next" onClick={handleSubmitInState1}>
                        {word}
                      </button>
                    )}
                    {counter > 0 && (
                      <button className="next" onClick={handleNext}>
                        {word}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </counterContext.Provider>
        </isMonthlyContext.Provider>
      </planContext.Provider>
    </addonsContext.Provider>
  );
};

export default App;
