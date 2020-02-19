import React from 'react';

const Button = () => {
    return (
       <div className="button">
           {window.localStorage.getItem("jahtilanguage") === "eng" ? <b className="buttontext">PRESS</b>: <b className="buttontext">PAINA</b>}
       </div>
    )
}

export default Button;