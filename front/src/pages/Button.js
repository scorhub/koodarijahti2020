import React from 'react';
import jahtiserv from '../serv/jahtiserv';

const ClickButton = ({ user, setUser }) => {
    jahtiserv.button(user)
    .then(res => {
        let tempUser = { ...user}
        tempUser.points = res.points
        setUser(tempUser);
        if(res.won > 0){
            window.alert('Congratulations, you have won ' + res.won + ' points!\nNext win in 10 more clicks!')
        }
        if(res.points === 0){
            if(window.confirm('You are out of points. Would you like to reset back to 20?')){
                jahtiserv.resetUser(user)
                .then(e => {
                    window.alert('Your points have been reseted, happy playing!')
                    let tempResetUser = { ...user}
                    tempResetUser.points = 20
                    setUser(tempResetUser);
                })
            }
        }
    })
}

const Button = ({ user, setUser }) => {
    return (
       <div className="button" onClick={e => ClickButton({user, setUser})}>
           {window.localStorage.getItem("jahtilanguage") === "eng" ? <b className="buttontext">PRESS</b>: <b className="buttontext">PAINA</b>}
       </div>
    )
}

export default Button;