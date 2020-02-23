import React from 'react';
import Button from '../Button';

const LoggedIn = () => {
    return (
        <>
            <p>Every press of the Button cost 1 point.</p>
            <p>You have ?points?</p>
            <Button />
            <p><b>Prices:</b><br />
            Every 10th push: 5 points.<br />
            Every 100th push: 40 points.<br />
            Every 500th push: 250 points.</p>
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