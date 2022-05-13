import React from "react";
import { LinkContainer } from "react-router-bootstrap";

function HomePage() {
  return (
    <div className="home-page">
      <img src="name.png" />
      <LinkContainer to="/game" exact>
        <h1 className="play-home-btn">PLAY</h1>
      </LinkContainer>
    </div>
  );
}

export default HomePage;
