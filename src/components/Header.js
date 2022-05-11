import React from "react";
import { Nav } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <LinkContainer to="/" exact>
          <Nav.Link href="/home">Home</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/about" exact>
          <Nav.Link eventKey="link-1">Characters</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/game" exact>
          <Nav.Link eventKey="link-2">Game</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/new" exact>
          <Nav.Link eventKey="link-3">New Character</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/score" exact>
          <Nav.Link eventKey="link-4">Scores</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
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
