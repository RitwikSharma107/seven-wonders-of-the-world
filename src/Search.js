import React from 'react';
import "./Search.css";

const Search = ({searchfield,searchChange}) => {
    return(
        <div>
            <input 
            className="pa3 ba b--light-yellow" 
            type="search" 
            placeholder="Search here"
            onChange={searchChange}>
            </input>
        </div>
    );
}

export default Search;