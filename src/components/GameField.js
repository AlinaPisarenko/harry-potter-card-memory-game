import React, { useState, useEffect, useRef } from "react";
import CardGame from "./CardGame";
import ModalComponent from "./ModalComponent";
import { Button, Col, Container, Row } from "react-bootstrap";

function GameField({ characters }) {
  //  //defining all the states
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [moves, setMoves] = useState(0);
  const timeout = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [level, setLevel] = useState(false);

  //getting  6 random objects from an array
  const mix = characters.sort(() => 0.5 - Math.random());
  const [cardsArray, setCardsArray] = useState(mix.slice(0, 6));

  //doubling amount of cards
  const [cards, setCards] = useState(() =>
    shuffleCards(cardsArray.concat(cardsArray))
  );

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

  //checking if all the cards are flipped
  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);

  // using Fisher Yates Shuffle to shuffle objects
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

  //comparing two cards and if they match we are excluding them from the game
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

  //function that handles every click on the card
  //increasing moves
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

  //checking if the card is flipped on the Dom to assign an appropriate className
  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  //
  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.id]);
  };

  //checking the completion of the game
  const checkCompletion = () => {
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
    setCardsArray(mix.slice(0, 6));
    setCards(shuffleCards(cardsArray.concat(cardsArray)));
  };

  return (
    <div className="App">
      <header>
        <h3 className="page-title">GAME</h3>
        <p className="description">FIND TWO MATCHING CARDS</p>
      </header>
      <div className="game-container">
        {/* mapping through all the cards to display each one of them */}
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

      <Container className="footer-game">
        <Row>
          <Col sm={6}>
            <h4 className="moves">MOVES: {moves}</h4>
          </Col>

          <Col sm={6}>
            <Button
              onClick={handleRestart}
              color="primary"
              variant="outline-primary"
              className="btn"
            >
              Restart
            </Button>
          </Col>
        </Row>
      </Container>
      {/* {setting ternary operator for displayin the modal } */}
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
