import React from "react";

function Player({ player }) {
  const { firstName, score } = player;
  return (
    <div className="score-list">
      <span className="score-page">{firstName}</span>
      <span className="score-page">{score} moves</span>
    </div>
  );
}

export default Player;
