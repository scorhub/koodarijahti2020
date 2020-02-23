import React from 'react';

const EnRules = () => {
    return (
        <div>
            <p>Rules:</p>
            <p>Players start with 20 points in their inventory. Pressing the button (on Homepage) costs one point adds one to calculator. When calculator hits 10 clicks, player who pressed the button gets 5 points. When calculator hits 100 clicks, are the "hit maker" awarded 40 points. And when the calculator hits 500 clicks, jackpot of 250 points are awarded to player of making that hit. Prices are not cumulative, and winner is always awarded with the highest score (example, when calculator hits 500 click, 250 points are awarded).</p>

            <p>If players points fall to zero, they can reset their points to starting amount (20 points).</p>

            <p>Trick of the game is that every player adds clicks to same calculator and only upon winning, system tells you how many more clicks are required for the next price.</p>

            <p>Happy clicking!</p>
        </div>
    )
}

export default EnRules;