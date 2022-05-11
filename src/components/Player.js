import React from "react";

function Player({ player }) {
  const { firstName, score } = player;
  return (
    <div className="score-list">
      <span>{firstName}</span>
      <span>{score} moves</span>
    </div>
  );
}

export default Player;
