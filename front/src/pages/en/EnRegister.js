import React, { useState } from "react";
import jahtiserv from "../../serv/jahtiserv";

const EnRegister = () => {
  const [register, setRegister] = useState({ usern: "", psw: "", psw2: "" });

  const regHandler = e => {
    e.preventDefault();
    jahtiserv
      .register({usern: register.usern, psw: register.psw})
      .then(res => {
        window.alert("Sign up successful") ? window.location.href = "/en/login" : window.location.href = "/en/login";
      })
      .catch(err => {
        if(err.response.status === 409){
        window.alert('Username already exists, please choose a different one.');
      } else if (err.response.status === 500){
        window.alert('Server error, please try again.');
      } else {
        window.alert('Unknown error, please try again.');
      }
    });
  };

  const setRegField = (value, fieldname) => {
    const tempRegister = { ...register };
    tempRegister[fieldname] = value;
    setRegister(tempRegister);
  };

  const checkFields = (fieldName, fieldValue) => {
    const rules = {
      usern: /^[a-zA-Z0-9_]{5,12}$/,
      psw: /^[a-zA-Z0-9_]{5,12}$/
    };
    return fieldValue.match(rules[fieldName]);
  };

  const checkSubmit = e => {
    if (register.psw === register.psw2) {
      if (
        checkFields("usern", register.usern) &&
        checkFields("psw", register.psw)
      ) {
        regHandler(e, register);
      } else {
        window.alert("Check username and password.");
      }
    } else {
      window.alert("Passwords do not match.");
    }
  };
  return (
      <div>
        <h3>Sign up for game.</h3>
        <form
          onSubmit={e => {
            e.preventDefault();
            checkSubmit(e, register);
          }}
        >
          <div className="regform">
            <div className="clientreg">
              <b>Username * </b><br/>
              <input type="text" onChange={e => setRegField(e.target.value, "usern")} autoFocus="autofocus" required value={register.usern} minLength="5" maxLength="10" /><br/>
              <b>Password * </b><br/>
              <input type="password" onChange={e => setRegField(e.target.value, "psw")} required value={register.psw} minLength="5" maxLength="10" /><br/>
              <b>Password again * </b><br/>
              <input type="password" onChange={e => setRegField(e.target.value, "psw2")} required value={register.psw2} minLength="5" maxLength="10" />
            </div>
            <p>* Required Information.</p>
          </div>
          <div className="regbutton">
            <p></p>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
  );
};

export default EnRegister;