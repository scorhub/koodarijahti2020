import React from 'react';
import Button from '../Button';

const LoggedIn = () => {
    return (
        <>
            <p>Jokainen painallus maksaa yhden pisteen.</p>
            <Button />
            <p>Joka 10. painallus tuottaa 5 pistettä</p>
            <p>Joka 100. painallus tuottaa 40 pistettä</p>
            <p>Joka 500. painallus tuottaa 250 pistettä</p>
        </>
    )
}

const NotLogged = () => {
    return (
        <div>
            <p>Hello World</p>
        </div>
    )

}

const FiHome = () => {
    return (
        <>
        {window.localStorage.setItem('jahtilanguage', "fi")}
        {window.localStorage.getItem('koodarijahti') ? <LoggedIn /> : <NotLogged />}
        </>
    )
}

export default FiHome;