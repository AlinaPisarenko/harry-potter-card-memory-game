import React from "react";
import CharacterList from "./CharacterList";
import SearchBar from "./SearchBar";

function CharacterPage({
  characters,
  search,
  handleSearch,
  onFilteredHouse,
  handleHouse,
  onDelete,
}) {
  return (
    <>
      <SearchBar
        search={search}
        handleSearch={handleSearch}
        onFilteredHouse={onFilteredHouse}
        characters={characters}
        handleHouse={handleHouse}
      />
      <CharacterList characters={characters} onDelete={onDelete} />
    </>
  );
}

export default CharacterPage;
