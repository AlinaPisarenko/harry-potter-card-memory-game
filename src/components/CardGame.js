import React from "react";

function CardGame({ onClick, card, index, isInactive, isFlipped }) {
  //function handles click on each card event
  const handleClick = () => {
    !isFlipped && onClick(index);
  };

  return (
    <div className="card-game" onClick={handleClick}>
      <div className="flip-card-inner">
        {!isFlipped && !isInactive ? (
          <div className="flip-card-front">
            <img src="hogwartslogo.png" alt="hogwarts" />
          </div>
        ) : isInactive ? (
          <div className="is-inactive"></div>
        ) : (
          <div className="flip-card-back">
            <img src={card.image} alt={card.name} />
          </div>
        )}
      </div>
    </div>
  );
}

export default CardGame;
