import React from "react";

function SearchBar({ search, handleSearch, onFilteredHouse, handleHouse }) {
  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a character"
          aria-label="Enter a character"
          aria-describedby="button-addon2"
          onChange={handleSearch}
          value={search}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Button
        </button>
      </div>
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
    </>
  );
}

export default SearchBar;
