import React, { useState, useEffect } from "react";
import { Container, Row, Table } from "react-bootstrap";
import Player from "./Player";

function Scores() {
  const [players, setPlayers] = useState([]);

  //getting scores data
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/players`)
      .then((r) => r.json())
      .then((data) => setPlayers(data));
  }, []);

  const eachPlayer = players
    .map((el) => <Player key={el.id} player={el} />)
    .sort((a, b) => a.props.player.score - b.props.player.score);
console.log(players)
  return (
    <>
      <div>
        <h3 className="page-title">Best scores</h3>
        {eachPlayer}
      </div>
    </>
  );
}

export default Scores;
