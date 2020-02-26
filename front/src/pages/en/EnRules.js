import React from 'react';

const EnRules = () => {
    return (
        <div className="textbox">
            <p>Rules:</p>
            <p>Players start with 20 points in their inventory. Pressing the button costs one point and adds one to calculator. All players increase the same calculator. For every 10 clicks on calculator, player who pressed the button gets 5 points. For every 100 clicks on calculator, the player is awarded 40 points. And for every 500 clicks on calculator, jackpot of 250 points is awarded to the player. Prices are not cumulative, and winner is always awarded with the highest score (example, when calculator hits 500 click, 250 points are awarded).</p>

            <p>If player points fall to zero, they can reset their points to starting amount (20 points).</p>

            <p>Happy clicking!</p>
        </div>
    )
}

export default EnRules;