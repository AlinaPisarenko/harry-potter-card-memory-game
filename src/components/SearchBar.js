import React from "react";

function SearchBar({ search, handleSearch, onFilteredHouse, handleHouse }) {
  return (
    <div>
      {/* returning buttons for all the houses */}
      <button onClick={handleHouse} className="house-button">
        <img className="logo" alt="hogwarts" src="hogwarts.png" />
      </button>
      <button onClick={handleHouse} className="house-button">
        <img className="logo" alt="Slytherin" src="slytherin.png" />
      </button>
      <button onClick={handleHouse} className="house-button">
        <img className="logo" alt="Gryffindor" src="gryffindor.png" />
      </button>
      <button onClick={handleHouse} className="house-button">
        <img className="logo" alt="Hufflepuff" src="hufflepuff.png" />
      </button>
      <button onClick={handleHouse} className="house-button">
        <img className="logo" alt="Ravenclaw" src="ravenclaw.png" />
      </button>
      <div className="input-group mb-3 search-input">
        <input
          type="text"
          className="form-control search-form"
          placeholder="SEARCH FOR A CHARACTER"
          aria-label="Enter a character"
          aria-describedby="button-addon2"
          onChange={handleSearch}
          value={search}
        />
      </div>
    </div>
  );
}

export default SearchBar;
