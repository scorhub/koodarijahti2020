import React from 'react';
import Button from '../Button';

const LoggedIn = () => {
    return (
        <>
            <p>Every press of the Button cost 1 point.</p>
            <Button />
            <p>Prices:</p>
            <p>Every 10th push: 5 points.</p>
            <p>Every 100th push: 40 points.</p>
            <p>Every 5000th push: 250 points.</p>
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

const EnHome = () => {
    return (
        <>
        {window.localStorage.setItem('jahtilanguage', "eng")}
        {window.localStorage.getItem('koodarijahti') ? <LoggedIn /> : <NotLogged />}
        </>
    )
}

export default EnHome;