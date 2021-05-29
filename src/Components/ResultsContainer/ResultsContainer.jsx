import React from 'react';
import Namecard from '../Namecard/Namecard';
import './ResultsContainer.css';

const ResultsContainer = ({ SuggestedNames }) => {
    const SuggestedNamesJsx = SuggestedNames.map((SuggestedName) => {
        return <Namecard key = {SuggestedName} SuggestedName = {SuggestedName}/>;
    });

    return (
        <div className ='results-container'>
             {SuggestedNamesJsx}
        </div>
    );
};

export default ResultsContainer;