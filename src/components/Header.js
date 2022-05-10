import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink, Switch } from "react-router-dom";

function Header() {
  const linkStyles = {
    textDecoration: "none",
  };
  return (
    <Nav variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link href="/">
          <NavLink to="/" exact style={linkStyles}>
            Home
          </NavLink>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-1">
          <NavLink to="/about" exact style={linkStyles}>
            About
          </NavLink>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-2">
          <NavLink to="/game" exact style={linkStyles}>
            Game
          </NavLink>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-3">
          <NavLink to="/new" exact style={linkStyles}>
            New Character
          </NavLink>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;
