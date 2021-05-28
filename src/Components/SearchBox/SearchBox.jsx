import React from 'react';
import './SearchBox.css';

const SearchBox = ({ onInputChage }) => {
    return (
        <div className='Serach-container'>
            <input
                onChange = {(event) => onInputChage(event.target.value)}
                placeholder='Type keyboards' className='search-input' />
        </div>

        
    );
};

export default SearchBox;