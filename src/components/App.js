import "../App.css";
import Header from "./Header";
import CharacterList from "./CharacterList";
import GameField from "./GameField";
import NewCharacterForm from "./NewCharacterForm";
import HomePage from "./HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <CharacterList />
      <GameField />
      <NewCharacterForm />
    </div>
  );
}

export default App;
