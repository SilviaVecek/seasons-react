import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        seasonText: "Lets hit the beach!",
        seasonIcon: "sun"
    },
    winter: {
        seasonText: "Burr, it is chilly!",
        seasonIcon: "snowflake"
    }
}

const getSeason = ( lat, month ) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = ({ lat }) => {
    const season = getSeason(lat, new Date().getMonth())
    const { seasonText, seasonIcon } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`massive icon-left ${seasonIcon} icon`} />
            <h1>{seasonText}</h1>
            <i className={`massive icon-right ${seasonIcon} icon`} />
        </div>
    );
};

export default SeasonDisplay;