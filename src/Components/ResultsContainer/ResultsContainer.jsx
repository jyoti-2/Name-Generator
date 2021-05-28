import React from 'react';
import './ResultsContainer.css';

const ResultsContainer = ({ SuggestedNames }) => {
    const SuggestedNamesJsx = SuggestedNames.map((SuggestedName) => {
        return (<p> {SuggestedName}</p>);
    });

    return (
        <div className ='results-container'>
            <p>
                {SuggestedNamesJsx}
            </p>
        </div>
    );
};

export default ResultsContainer;