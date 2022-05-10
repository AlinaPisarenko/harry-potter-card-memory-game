import { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import CharacterPage from "./CharacterPage";
import GameField from "./GameField";
import NewCharacterForm from "./NewCharacterForm";
import HomePage from "./HomePage";
import { Route, Switch } from "react-router-dom";

const API = "http://localhost:3001/characters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((data) => setCharacters(data));
  }, []);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleAddCharacter(newCharacter) {
    const updatedCharacterList = [...characters, newCharacter];
    setCharacters(updatedCharacterList);
  }

  const filteredItems = characters.filter((el) =>
    el.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/about">
          <CharacterPage
            characters={filteredItems}
            search={search}
            handleSearch={handleSearch}
          />
        </Route>

        <Route path="/game">
          <GameField characters={characters} />
        </Route>

        <Route path="/new">
          <NewCharacterForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
