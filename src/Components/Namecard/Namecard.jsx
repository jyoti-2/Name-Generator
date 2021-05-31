import React from 'react';
import './Namecard.css';
//
const nameCheapurl = 'https://www.nameCheap.com/domains/registration/results/domain';
const Namecard = ({SuggestedName}) => {
    return (
        <a href={`${nameCheapurl}${SuggestedName}`}>
            <div className ='result-namecard'>
                <p className='result-name'> {SuggestedName} </p>
            </div>
       </a>
    );
};

export default Namecard;





