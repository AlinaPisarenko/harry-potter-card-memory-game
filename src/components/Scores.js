import React, { useState, useEffect } from "react";
import { Container, Row, Table } from "react-bootstrap";
import Player from "./Player";

function Scores() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/players")
      .then((r) => r.json())
      .then((data) => setPlayers(data));
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:3001/advanced-players")
  //     .then((r) => r.json())
  //     .then((data) => setPlayers(data));
  // }, []);

  const eachPlayer = players
    .map((el) => <Player key={el.id} player={el} />)
    .sort((a, b) => a.props.player.score - b.props.player.score);

  return (
    <>
      <div>
        <h1>Best scores</h1>
        {eachPlayer}
      </div>
      {/* <div>
        <h1>Best scores</h1>
        {eachPlayer}
      </div> */}
    </>
  );
}

export default Scores;
