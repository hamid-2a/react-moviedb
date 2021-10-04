import React from 'react';
import "./search-bar.styles.css"

//const select = document.getElementById("select-menu");

const SearchBar = ({ setSearchType, setSearchedName }) => {
    return (
        <div className="search-group">
            <div className="dropdown-list">
                <select name="type" id="select-menu" onChange={
                    (e) => setSearchType(e.target.value)
                }>
                    <option value="movie">Movie</option>
                    <option value="tv">TV</option>
                </select>
            </div>

            <div className="search-bar" >
                <input
                    type="text"
                    placeholder="Search here..."
                    onChange={e => setSearchedName(e.target.value.toLocaleLowerCase())}
                />
                <span className="bar"></span>
            </div>
        </div>
    )
}

export default SearchBar

