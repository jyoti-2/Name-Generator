import React from 'react';
import './Namecard.css';


const nameCheapurl = 'https://www.nameCheap.com/domains/registration/results/domain';


const Namecard = ({Suggestednames}) => {
    return (
        <a href={`${nameCheapurl}${Suggestednames}`}>
            <div className='result-namecard'>
                <p className='result-name'> { Suggestednames} </p>
            </div>
        </a>
    );
};

export default Namecard;





