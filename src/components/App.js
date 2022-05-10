import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Header from "./Header";
import CharacterPage from "./CharacterPage";
import GameField from "./GameField";
import NewCharacterForm from "./NewCharacterForm";
import HomePage from "./HomePage";

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

  const filteredItems = characters.filter((el) =>
    el.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="App">
      <Header />
      <HomePage />
      <CharacterPage
        characters={filteredItems}
        search={search}
        handleSearch={handleSearch}
      />
      <GameField />
      <NewCharacterForm />
    </div>
  );
}

export default App;
