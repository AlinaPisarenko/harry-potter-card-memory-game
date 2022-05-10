import React from "react";

function SearchBar({ search, handleSearch }) {
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
      <img className="logo" src="slytherin.png" />
    </>
  );
}

export default SearchBar;
