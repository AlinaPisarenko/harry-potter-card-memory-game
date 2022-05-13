import React from "react";
import CharacterCard from "./CharacterCard";
import map from "lodash/map";
import range from "lodash/range";

function CharacterList({ characters, onDelete }) {
  //mapping throug an array of character to get info about eac one of them
  const eachCharacter = characters.map((el) => (
    <CharacterCard key={el.id} character={el} onDelete={onDelete} />
  ));

  return (
    <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
      {map(range(1), (_) => eachCharacter)}
    </div>
  );
}

export default CharacterList;
