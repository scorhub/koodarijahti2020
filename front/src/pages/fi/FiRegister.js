import React, { useState } from "react";
import jahtiserv from "../../serv/jahtiserv";

const FiRegister = () => {
  const [register, setRegister] = useState({ usern: "", psw: "", psw2: "" });

  const regHandler = e => {
    e.preventDefault();
    jahtiserv
      .register({usern: register.usern, psw: register.psw})
      .then(res => {
        window.alert("Rekisteröinti onnistui") ? window.location.href = "/fi/login" : window.location.href = "/fi/login";
      })
      .catch(err => {
        if(err.response.status === 409){
        window.alert('Käyttäjätunnus on jo käytössä, ole hyvä ja valitse toinen.');
      } else if (err.response.status === 500){
        window.alert('Palvelinvirhe, ole hyvä ja yritä uudestaan.');
      } else {
        window.alert('Tuntematon virhe, ole hyvä ja yritä uudestaan.');
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
        window.alert("Tarkista käyttäjänimi ja salasana.");
      }
    } else {
      window.alert("Salasanat eivät täsmää.");
    }
  };
  return (
      <div>
        <h3>Rekisteröidy peliin.</h3>
        <form
          onSubmit={e => {
            e.preventDefault();
            checkSubmit(e, register);
          }}
        >
          <div className="regform">
            <div className="clientreg">
              <b>Käyttäjätunnus * </b><br/>
              <input type="text" onChange={e => setRegField(e.target.value, "usern")} required value={register.usern} minLength="5" maxLength="10"/><br/>
              <b>Salasana * </b><br/>
              <input type="password" onChange={e => setRegField(e.target.value, "psw")} required value={register.psw} minLength="5" maxLength="16" /><br/>
              <b>Salasana uudestaan * </b><br/>
              <input type="password" onChange={e => setRegField(e.target.value, "psw2")} required value={register.psw2} minLength="5" maxLength="16" />
            </div>
            <p>* Pakollinen kenttä.</p>
          </div>
          <div className="regbutton">
            <p></p>
            <button type="submit">Rekisteröidy</button>
          </div>
        </form>
      </div>
  );
};

export default FiRegister;