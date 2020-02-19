import React, { useState } from 'react';
import jahtiserv from '../../serv/jahtiserv';

const EnLogin = () => {
    const [login, setLogin] = useState({ usern: "", psw: "" });
  
    const loginForm = (e, login) => {
      e.preventDefault();
      console.log(login)
      jahtiserv.login(login)
        .then(res => {
          window.localStorage.setItem("koodarijahti", JSON.stringify(res));
          window.location.reload();
        })
        .catch(err => {
          window.alert("Wrong username or password.");
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
        <h4>Sign In</h4>
        <form onSubmit={e => logMeIn(e)}>
          <input type="text" onChange={e => setUpdField(e.target.value, "usern")} value={login.usern} autoFocus="autofocus" placeholder="Username" required />
          <br/>
          <input type="password" onChange={e => setUpdField(e.target.value, "psw")} value={login.psw} placeholder="Password" required />
          <br/>
            <button type="submit">Sign In</button>
        </form>
      </div>
    );
  };

export default EnLogin;