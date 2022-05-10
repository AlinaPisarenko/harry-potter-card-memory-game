import React from "react";
import CharacterList from "./CharacterList";
import SearchBar from "./SearchBar";

function CharacterPage({ characters, search, handleSearch }) {
  return (
    <>
      <SearchBar search={search} handleSearch={handleSearch} />
      <CharacterList characters={characters} />
    </>
  );
}

export default CharacterPage;
