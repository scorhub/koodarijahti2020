import React from 'react';
import Button from '../Button';
import { NavLink } from 'react-router-dom';
import jahtiserv from '../../serv/jahtiserv';

const LoggedIn = ({user, setUser}) => {

    const resetPoints = () => {
        jahtiserv.resetUser(user)
                .then(e => {
                    window.alert('Your points have been reseted, happy playing!')
                    let tempResetUser = { ...user}
                    tempResetUser.points = 20
                    setUser(tempResetUser);
                })
    }

    if(user.points > 0){
    return (
        <>
            <p>Every press of the Button cost 1 point.</p>
            <p>You have {user.points} points.</p>
            <Button user={user} setUser={setUser} />
            <p><b>Prices:</b><br />
            Every 10th push: 5 points.<br />
            Every 100th push: 40 points.<br />
            Every 500th push: 250 points.</p>
        </>
    )
    } else {
        return (
            <>
            <p>You are out of points :(</p>
            <br/>
            <p>Reset your points by pressing <NavLink to="#" onClick={e => resetPoints()} >here.</NavLink></p> 
            </>
        )
    }
}

const NotLogged = () => {
    return (
        <div>
            <p>Hello World</p>
        </div>
    )

}

const EnHome = ({user, setUser}) => {
    return (
        <>
        {window.localStorage.setItem('jahtilanguage', "eng")}
        {window.localStorage.getItem('koodarijahti') ? <LoggedIn user={user} setUser={setUser} /> : <NotLogged />}
        
        <p>koodin kommentoinnit, css</p>
        </>
    )
}

export default EnHome;