import React from 'react';

const FiRules = () => {
    return (
        <div className="textbox">
            <p>Rules:</p>
            <p>Pelaajilla on pelin alussa 20 pistettä. Napin painaminen maksaa yhden pisteen ja lisää pelilaskuria yhdellä. Pelaajilla on käytössä yhteinen laskuri. Laskurin joka 10. nosto antaa 5 pisteen voiton, joka 100. nosto 40 pisteen voiton ja joka 500. nosto 250 pisteen voiton. Voitot eivät ole kerrannollisia, esimerkiksi laskurin nuostessa sataan, pelaaja saa 40 pistettä.</p>

            <p>Jos pelaajan pistemäärä tippuu nollaan, voi pisteensä palauttaa alkuarvoon (20 pistettä).</p>

            <p>Onnea peliin!</p>
        </div>
    )
}

export default FiRules;