import React, { useState, useEffect, useRef } from "react";
import CardGame from "./CardGame";
import ModalComponent from "./ModalComponent";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";

function GameField({ characters }) {
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [moves, setMoves] = useState(0);
  const timeout = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [level, setLevel] = useState(false);

  const mix = characters.sort(() => 0.5 - Math.random());
  const [cardsArray, setCardsArray] = useState(mix.slice(0, 4));
  // Get sub-array of first n elements after cardsArray

  const [cards, setCards] = useState(() =>
    shuffleCards(cardsArray.concat(cardsArray))
  );

  console.log(cards);
  //setting timeout if 2 card are open but not matching
  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      setTimeout(evaluate, 500);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);

  const evaluate = () => {
    const [first, second] = openCards;

    if (cards[first].id === cards[second].id) {
      setClearedCards((prev) => ({ ...prev, [cards[first].id]: true }));
      setOpenCards([]);
      return;
    }
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };

  // Fisher Yates Shuffle
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  function shuffleCards(array) {
    const length = array.length;
    for (let i = length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const currentIndex = i - 1;
      swap(array, currentIndex, randomIndex);
    }
    return array;
  }

  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      // increase the moves once we opened a pair
      setMoves((moves) => moves + 1);
    } else {
      // If two cards are already open, we cancel timeout set for flipping cards back
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.id]);
  };

  const checkCompletion = () => {
    // We are storing clearedCards as an object since its more efficient
    //to search in an object instead of an array
    if (
      Object.keys(clearedCards).length === cardsArray.length &&
      Object.keys(clearedCards).length >= 1
    ) {
      setShowModal(true);
    }
  };

  //resetting the game
  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setCardsArray(mix.slice(0, 4));
    setCards(shuffleCards(cardsArray.concat(cardsArray)));
  };

  // function changeLevel() {
  //   setLevel(!level);

  //   setClearedCards({});
  //   setOpenCards([]);
  //   setShowModal(false);
  //   setMoves(0);
  //   if (level === false) {
  //     setCardsArray(mix.slice(0, 8));
  //   } else {
  //     setCardsArray(mix.slice(0, 4));
  //   }
  //   setCards(shuffleCards(cardsArray.concat(cardsArray)));
  // }

  return (
    <div className="App">
      <header>
        <h3>GAME</h3>
        <div>Try to find two matching cards</div>
      </header>
      <div className="container">
        {cards.map((card, index) => {
          return (
            <CardGame
              key={index}
              card={card}
              index={index}
              onClick={handleCardClick}
              isFlipped={checkIsFlipped(index)}
              isInactive={checkIsInactive(card)}
            />
          );
        })}
      </div>
      <p>Moves: {moves}</p>
      <Button onClick={handleRestart} color="primary" variant="outline-primary">
        Restart
      </Button>
      {/* <Button onClick={changeLevel} color="primary" variant="outline-primary">
        Advanced
      </Button> */}
      {/* <Button onClick={changeLevel} color="primary" variant="outline-primary">
        Beginner
      </Button> */}

      {showModal ? (
        <ModalComponent
          showModal={showModal}
          moves={moves}
          handleRestart={handleRestart}
          level={level}
        />
      ) : null}
    </div>
  );
}

export default GameField;
