import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header(props) {
  return (
    <React.Fragment>
      <Navbar.Brand href = "#home"><h1>Tree Beards Tap House</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav class ="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Kegs</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-navbar-nav">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">2nd action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">thingy</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">diffrent link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </React.Fragment>
  );
}

export default Header;