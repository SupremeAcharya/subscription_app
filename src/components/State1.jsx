import React, { useState, useEffect, useImperativeHandle, forwardRef, useContext } from "react";
import "./State1.css";
import { counterContext } from "../App";

const State1 = forwardRef((props, ref) => {
  const { formdata, handleFormData, handleNext } = useContext(counterContext);
  const { prevName, prevEmail, prevPhone } = formdata;
  const [name, setName] = useState(prevName || "");
  const [email, setEmail] = useState(prevEmail || "");
  const [phone, setPhone] = useState(prevPhone || "");
  const [isValid, setIsValid] = useState(true);
  const [emailerror, setEmailError] = useState(false);
//   const [phoneerror, setPhoneError] = useState(false);

  const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;


  useImperativeHandle(ref, () => ({
    handleSubmit
  }));

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
		if(!/^[A-Z a-z]*$/.test(value)){
			return;
		}
      setName(value);
    } else if (name === "email") {
		setEmail(value);
		setEmailError(false);
		
    } else if (name === "phone") {
		if(!/^\d{0,10}$/.test(value)){
			return;
		}
      setPhone(value);
    }
  };


  const validate = () => {
    if (name.length === 0 || email.length === 0 || phone.length === 0) {
      setIsValid(false);
      return false;
    }else if(!emailPattern.test(email)){
		setEmailError(true);
		return false;
	// }else if(phone.length != 10 && phone.length>=1){
	// 	setPhoneError(true);
	// 	return false;
	 } else {
      setIsValid(true);
	  setEmailError(false);
      return true;
    }
	// if (!emailPattern.test(email)) {
	// 	setEmailError(true);
	// 	return false;
	//   } else {
	// 	setEmailError("false");
	//   }

  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    if (validate()) {
      handleFormData({
        name,
        email,
        phone,
      });
      handleNext();
    }
  };

  useEffect(() => {
    formdata.name && setName(formdata.name);
    formdata.email && setEmail(formdata.email);
    formdata.phone && setPhone(formdata.phone);
  }, []);

  return (
    <> 
      <div className="inner">
        <div className="header">
          <h1>Personal Info</h1>
          <p className="paragraph">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="form-label">
              <div className="firstlable">
                <label htmlFor="name">Name:</label>
                {!isValid && name.length === 0 && (
                  <span className="error">This field is required</span>
                )}
              </div>
              <input
                type="text"
                name="name"
                placeholder="abcd Bhandari"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="form-label">
              <div className="firstlable">
                <label htmlFor="email">Email-address:</label>
                {!isValid && email.length === 0 && (
                  <span className="error">This field is required</span>
                )}
                {emailerror && email.length !== 0 && (
                  <span className="error">email pattern is xyz@gmail.com</span>
                )}
              </div>
              <input
                type="email"
                name="email"
                placeholder="__________.@gmail.com"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="form-label">
              <div className="firstlable">
                <label htmlFor="phone">Phone Number:</label>
                {!isValid && phone.length === 0 && (
                  <span className="error">This field is required</span>
                )}
                {/* {phoneerror && (
                  <span className="error">must be 10 digits</span>
                )} */}
              </div>
              <input
                type="text"
                name="phone"
                placeholder="+977 9869696969"
                value={phone}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
});

export default State1;