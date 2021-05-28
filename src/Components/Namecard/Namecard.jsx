import React from 'react';
import './Namecard.css';

const Namecard = ({ Suggestednames }) => {
    return (
        <div className='result-namecard'>
            <p className='result-name'> { Suggestednames} </p>
        </div>
    );
};




export default Namecard;





