import React from "react";

function CardGame({ onClick, card, index, isInactive, isFlipped, isDisabled }) {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div className="card-game" onClick={handleClick}>
      {/* <div className="card-face card-font-face">
        <img src="hogwartslogo.png" alt="hogwarts" />
      </div> */}
      {/* <div className="card-face card-back-face"> */}
      <img src={card.image} alt={card.name} />
      {/* </div> */}
    </div>
  );
}

export default CardGame;
