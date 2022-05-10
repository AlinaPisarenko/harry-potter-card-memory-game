import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterList({ characters }) {
  const eachCharacter = characters.map((el) => (
    <CharacterCard key={el.id} character={el} />
  ));

  return <ul className="cards">{eachCharacter}</ul>;
}

export default CharacterList;
