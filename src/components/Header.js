import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeOff } from "@fortawesome/free-solid-svg-icons";

function Header() {
  //adding an audio file
  const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
      playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    }, []);

    return [playing, toggle];
  };

  const [playing, toggle] = useAudio("ThemeSong.mp3");

  return (
    //setting up navbar using router and bootstrap
    <Navbar bg="black" variant="dark">
      <Navbar.Brand href="#home">
        <img className="logo-nav" src="hp-logo-3.png" />
      </Navbar.Brand>
      <Nav className="me-auto">
        <LinkContainer to="/" exact>
          <Nav.Link href="/home">Home | </Nav.Link>
        </LinkContainer>

        <LinkContainer to="/about" exact>
          <Nav.Link eventKey="link-1">Characters | </Nav.Link>
        </LinkContainer>

        <LinkContainer to="/game" exact>
          <Nav.Link eventKey="link-2">Game | </Nav.Link>
        </LinkContainer>

        <LinkContainer to="/new" exact>
          <Nav.Link eventKey="link-3">New Character | </Nav.Link>
        </LinkContainer>

        <LinkContainer to="/score" exact>
          <Nav.Link eventKey="link-4">Scores</Nav.Link>
        </LinkContainer>
      </Nav>
      <button className="sound" onClick={toggle}>
        <div className={playing ? "sound-btn" : "sound-btn-off"}>
          <FontAwesomeIcon icon={faVolumeOff} />
        </div>
      </button>
    </Navbar>
  );
}

export default Header;

// const linkStyles = {
//   textDecoration: "none",
// };
// return (
//   <Nav variant="tabs" defaultActiveKey="/">
//     <Nav.Item>
//       <Nav.Link href="/" to="/" exact style={linkStyles}>
//         <NavLink to="/" exact style={linkStyles}>
//           Home
//         </NavLink>
//       </Nav.Link>
//     </Nav.Item>

//     <Nav.Item>
//       <Nav.Link eventKey="link-1">
//         <NavLink to="/about" exact style={linkStyles}>
//           About
//         </NavLink>
//       </Nav.Link>
//     </Nav.Item>

//     <Nav.Item>
//       <Nav.Link eventKey="link-2">
//         <NavLink to="/game" exact style={linkStyles}>
//           Game
//         </NavLink>
//       </Nav.Link>
//     </Nav.Item>

//     <Nav.Item>
//       <Nav.Link eventKey="link-3">
//         <NavLink to="/new" exact style={linkStyles}>
//           New Character
//         </NavLink>
//       </Nav.Link>
//     </Nav.Item>
//   </Nav>
// );
