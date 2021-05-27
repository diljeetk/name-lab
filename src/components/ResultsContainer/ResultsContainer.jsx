import React from 'react';
import NameCard from '../NameCard/NameCard'
import './ResultsContainer.css';

const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNamesJSX = suggestedNames.map(name => {
        return (
            <NameCard suggestedName={name}/>
        )
    })
    return(
        <div className="results-container">
                {suggestedNames.length > 0 && suggestedNamesJSX}
        </div>
    )
}

export default ResultsContainer;