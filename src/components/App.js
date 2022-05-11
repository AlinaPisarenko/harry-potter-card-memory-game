import { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import CharacterPage from "./CharacterPage";
import GameField from "./GameField";
import NewCharacterForm from "./NewCharacterForm";
import HomePage from "./HomePage";
import { Route, Switch } from "react-router-dom";
import Scores from "./Scores";

const API = "http://localhost:3001/characters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [newCharacterArray, setNewCharacterArray] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedHouse, setSelectedHouse] = useState("hogwarts");

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleAddCharacter(newCharacter) {
    const updatedCharacterList = [...characters, newCharacter];
    setCharacters(updatedCharacterList);
  }


  function handleHouse(e) {
    setSelectedHouse(e.target.alt);
  }

  useEffect(() => {
    let filterArray = characters.filter((el) =>
      el.name.toLowerCase().includes(search.toLowerCase())
    );
    selectedHouse === "hogwarts"
      ? setNewCharacterArray(filterArray)
      : setNewCharacterArray(filteredHouse(filterArray));
  }, [characters, search, selectedHouse]);

  function filteredHouse(someCharacters) {
    return someCharacters.filter(
      (character) => character.house === selectedHouse
    );
  }


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/about">
          <CharacterPage
            characters={newCharacterArray}
            search={search}
            handleSearch={handleSearch}
            // onFilteredHouse={filteredHouse}
            handleHouse={handleHouse}
          />
        </Route>

        <Route path="/game">
          <GameField characters={characters} />
        </Route>

        <Route path="/new">
          <NewCharacterForm onAddCharacter={handleAddCharacter} />
        </Route>

        <Route path="/score">
          <Scores />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
