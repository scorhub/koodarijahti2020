import React from 'react';

const EnAbout = () => {
    return (
        <div className="textbox textsmall">
            <i>This game is project to Vincit summer job recruitment. Assigment in finnish can be found <a href="https://koodarijahti.fi/Ennakkotehtava_2020_Painikepeli.pdf" target="_blank" rel="noopener noreferrer">here</a>.</i><br/>
            <br/>
            <b>Programming languages used in project:</b><br/>
            Frontend: React with <i>React Router Dom</i> and <i>axios</i>. In basic structure I used also <i>Html</i> and <i>Css</i>.<br/>
            Backend: Node.js with following packages; <i>bcryptjs</i>, <i>dotenv</i>, <i>express</i>, <i>jest</i>, <i>@hapi/joi</i>, <i>express-joi-validation</i>, <i>jsonwebtoken</i>, <i>knex</i> and <i>nodemon</i>.<br/>
            Database runs on MySQL server, migrations run with <i>knex</i>.<br/>
            Git repository <a href="https://github.com/scorhub/koodarijahti2020" target="_blank" rel="noopener noreferrer">here</a>.<br/>
            <br/>
            The game demonstrates my coding skills with these particular softwares and shows my way of approach of the assigment.<br/>
            <br/>
            <i>Kimmo</i>.
        </div>
    )
}

export default EnAbout;