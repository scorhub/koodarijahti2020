import React, { useState } from "react";
import jahtiserv from "../../serv/jahtiserv";

const EnRegister = () => {
  const [register, setRegister] = useState({ usern: "", psw: "", psw2: "" });

  const regHandler = e => {
    e.preventDefault();
    jahtiserv
      .register(register)
      .then(res => {
        window.confirm("Sign up successful");
      })
      .catch(e => {
        window.alert("Database error, WHAT NUMBER?", e);
      });
  };

  const setRegField = (value, fieldname) => {
    const tempRegister = { ...register };
    tempRegister[fieldname] = value;
    setRegister(tempRegister);
  };

  const checkFields = (fieldName, fieldValue) => {
    const rules = {
      usern: /^[a-zA-Z0-9_]{3,20}$/,
      psw: /^[a-zA-Z0-9_]{3,20}$/
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
              <input type="text" onChange={e => setRegField(e.target.value, "usern")} required value={register.usern} /><br/>
              <b>Password * </b><br/>
              <input type="password" onChange={e => setRegField(e.target.value, "psw")} required value={register.psw} /><br/>
              <b>Password again * </b><br/>
              <input type="password" onChange={e => setRegField(e.target.value, "psw2")} required value={register.psw2} />
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