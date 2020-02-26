import React from 'react';
import Button from '../Button';
import { NavLink } from 'react-router-dom';
import jahtiserv from '../../serv/jahtiserv';

const LoggedIn = ({user, setUser}) => {

    const resetPoints = () => {
        jahtiserv.resetUser(user)
                .then(e => {
                    window.alert('Pisteesi on palautettu alkuarvoon, pelionnea!')
                    let tempResetUser = { ...user}
                    tempResetUser.points = 20
                    setUser(tempResetUser);
                })
    }

    if(user.points > 0){
    return (
        <>
            <p>Jokainen painallus maksaa yhden pisteen.</p>
            <p>Sinulla on {user.points} pistettä.</p>
            <Button user={user} setUser={setUser} />
            <p>Joka 10. painallus tuottaa 5 pistettä</p>
            <p>Joka 100. painallus tuottaa 40 pistettä</p>
            <p>Joka 500. painallus tuottaa 250 pistettä</p>
            </>
    )
    } else {
        return (
            <>
            <p>Pisteesi ovat loppuneet :(</p>
            <br/>
            <p>Palauta pisteet alkuarvoon painamalla <NavLink to="#" onClick={e => resetPoints()} >tästä.</NavLink></p> 
            </>
        )
    }
}

const NotLogged = () => {
    return (
        <div className="textbox">
            <p>Tervetuloa Nappipeliin!<br/><br/>Kirjaudu sisään pelataksesi tai tutustu sääntöihin <NavLink to="/fi/rules">täällä</NavLink>.</p>
        </div>
    )

}

const FiHome = ({user, setUser}) => {
    return (
        <>
        {window.localStorage.setItem('jahtilanguage', "fi")}
        {window.localStorage.getItem('koodarijahti') ? <LoggedIn user={user} setUser={setUser} /> : <NotLogged />}
        
        <p></p>
        </>
    )
}

export default FiHome;