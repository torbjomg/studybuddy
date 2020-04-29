import React from "react";

import {
  Navbar,
  Nav,
  NavDropdown,
  Glyphicon,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="black" variant="dark" sticky="top">
      <Navbar.Brand>
        <img
          src="./logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=" "
        ></img>
      </Navbar.Brand>
      <NavDropdown
        bg="black"
        title="Menu"
        id="collasible-nav-dropdown"
        style={{ color: "#5299d3" }}
      >
        <NavDropdown.Item style={{ color: "#5299d3" }} href="/">
          Home
        </NavDropdown.Item>
        <NavDropdown.Item style={{ color: "#5299d3" }} href="/welcome">
          Admin
        </NavDropdown.Item>
        <NavDropdown.Item style={{ color: "#5299d3" }} href="/users">
          Users
        </NavDropdown.Item>
        <NavDropdown.Item style={{ color: "#5299d3" }} href="/lessons">
          Lessons
        </NavDropdown.Item>
        <NavDropdown.Item style={{ color: "#5299d3" }} href="/challenges">
          Challenges
        </NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
}

export default NavBar;
