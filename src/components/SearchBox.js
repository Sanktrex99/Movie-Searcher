import React from 'react';

const SearchBox = (props) => {
    return (
        <div className='input-group col-sm-4'>
            <input
                className='form-control'
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder='Type to search...'
            ></input>
            <button
                type="button"
                className="btn btn-outline-primary"
                onClick={(event) => props.setSearchValue(event.target.value)}
            >Search
                </button>
        </div>
    );
};

export default SearchBox;