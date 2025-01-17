import React, { useState } from 'react';
import jahtiserv from '../../serv/jahtiserv';

const EnLogin = () => {
    const [login, setLogin] = useState({ usern: "", psw: "" });
  
    const loginForm = (e, login) => {
      e.preventDefault();
      jahtiserv.login(login)
        .then(res => {
          window.localStorage.setItem("koodarijahti", JSON.stringify(res));
          window.alert("Sign in successful") ? window.location.href = "/": window.location.href = "/";
        })
        .catch(err => {
          if(err.response.status === 401){
          window.alert('Invalid username or password.');
        } else if (err.response.status === 500){
          window.alert('Server error, please try again.');
        } else {
          window.alert('Unknown error, please try again.');
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
        <h4>Sign In</h4>
        <form onSubmit={e => logMeIn(e)}>
          <input type="text" onChange={e => setUpdField(e.target.value, "usern")} value={login.usern} autoFocus="autofocus" placeholder="Username" required minLength="5" maxLength="10" />
          <br/>
          <input type="password" onChange={e => setUpdField(e.target.value, "psw")} value={login.psw} placeholder="Password" required minLength="5" maxLength="16" />
          <br/>
            <button type="submit">Sign In</button>
        </form>
      </div>
    );
  };

export default EnLogin;