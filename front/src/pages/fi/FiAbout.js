import React from 'react';

const FiAbout = () => {
    return (
        <div className="textbox textsmall">
            <i>Tämä peli on projekti Vincitin kesätyörekryä varten. Tehtävänannon löytää <a href="https://koodarijahti.fi/Ennakkotehtava_2020_Painikepeli.pdf" target="_blank" rel="noopener noreferrer">täältä</a>.</i><br/>
            <br/>
            <b>Ohjelmoinnissa käytetyt kielet:</b><br/>
            Käyttöliittymä: React laajennettuna <i>React Router Dom</i>illa ja <i>axios</i>ella. Perusrakenteessa <i>Html</i> ja <i>Css</i>.<br/>
            Back end: Node.js seuraavilla paketeilla; <i>bcryptjs</i>, <i>dotenv</i>, <i>express</i>, <i>jest</i>, <i>@hapi/joi</i>, <i>express-joi-validation</i>, <i>jsonwebtoken</i>, <i>knex</i> ja <i>nodemon</i>.<br/>
            Tietokanta pyörii MySQL serverillä, migraatio tehty <i>knex</i>.<br/>
            Koodi löytyy <a href="https://github.com/scorhub/koodarijahti2020" target="_blank" rel="noopener noreferrer">GitHubista</a>.<br/>
            <br/>
            Peli esittelee kyseisten koodikielten koodaustaitojani ja lähestymistapaani haasteeseen.<br/>
            <br/>
            <i>Kimmo</i>.
        </div>
    )
}

export default FiAbout;