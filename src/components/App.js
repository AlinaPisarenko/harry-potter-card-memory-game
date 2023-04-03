import { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import CharacterPage from "./CharacterPage";
import GameField from "./GameField";
import NewCharacterForm from "./NewCharacterForm";
import HomePage from "./HomePage";
import { Route, Switch } from "react-router-dom";
import Scores from "./Scores";
import ModalNewCharacter from "./ModalNewCharacter";

const API = `${process.env.REACT_APP_API_URL}/characters`;
console.log(API)
function App() {
  //defining all the states
  const [characters, setCharacters] = useState([]);
  const [newCharacterArray, setNewCharacterArray] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedHouse, setSelectedHouse] = useState("hogwarts");
  const [showModal, setShowModal] = useState(false);
  const [newWizard, setNewWizard] = useState({});

  //getting data from db.json
  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  //assigning the state to use fo a search by name form
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  //adding new character
  //closing the modal that displayed a new character
  function handleAddCharacter(newCharacter) {
    setNewWizard(newCharacter);
    setShowModal(!showModal);
    const updatedCharacterList = [...characters, newCharacter];
    setCharacters(updatedCharacterList);
  }

  //assigning the state to use fo a filter by the house
  function handleHouse(e) {
    setSelectedHouse(e.target.alt);
  }

  //handling search and filtering by the house
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

  //deleting the character from the DOM
  function onDelete(obj) {
    setCharacters(characters.filter((el) => obj.id !== el.id));
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
            handleHouse={handleHouse}
            onDelete={onDelete}
          />
        </Route>

        <Route path="/game">
          <GameField characters={newCharacterArray} />
        </Route>

        <Route path="/new">
          <NewCharacterForm onAddCharacter={handleAddCharacter} />
        </Route>

        <Route path="/score">
          <Scores />
        </Route>
      </Switch>

      {showModal ? (
        <ModalNewCharacter
          setShowModal={setShowModal}
          showModal={showModal}
          newWizard={newWizard}
          setNewWizard={setNewWizard}
        />
      ) : null}
    </div>
  );
}

export default App;
export { API };
