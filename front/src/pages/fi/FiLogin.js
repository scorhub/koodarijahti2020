import React, { useState } from 'react';
import jahtiserv from '../../serv/jahtiserv';

const FiLogin = () => {
    const [login, setLogin] = useState({ usern: "", psw: "" });
  
    const loginForm = (e, login) => {
      e.preventDefault();
      jahtiserv.login(login)
        .then(res => {
          window.localStorage.setItem("koodarijahti", JSON.stringify(res));
          window.alert("Sisäänkirjautuminen onnistui") ? window.location.href = "/": window.location.href = "/";
        })
        .catch(err => {
          if(err.response.status === 401){
          window.alert('Väärä käyttäjänimi tai salasana.');
        } else if (err.response.status === 500){
          window.alert('Palvelinvirhe, ole hyvä ja yritä uudestaan.');
        } else {
          window.alert('Tuntematon virhe, ole hyvä ja yritä uudestaan.');
        }
      });
    };
  
    const logMeIn = e => {
      loginForm(e, login);
      setLogin({ usern: "", psw: "" });
    };
    
    const setUpdField = (value, fieldname) => {
        const tempUpdate = { ...login };
        tempUpdate[fieldname] = value;
        setLogin(tempUpdate);
    }

    return (
      <div className="item">
        <h4>Kirjaudu sisään</h4>
        <form onSubmit={e => logMeIn(e)}>
          <input type="text" onChange={e => setUpdField(e.target.value, "usern")} value={login.usern} autoFocus="autofocus" placeholder="Käyttäjätunnus" required minLength="5" maxLength="10" />
          <br/>
          <input type="password" onChange={e => setUpdField(e.target.value, "psw")} value={login.psw} placeholder="Salasana" required minLength="5" maxLength="16" />
          <br/>
            <button type="submit">Kirjaudu sisään</button>
        </form>
      </div>
    );
  };

export default FiLogin;