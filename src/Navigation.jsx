import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar style={{ backgroundImage: 'linear-gradient(to right, #067d68 , #50d5b7 )', // Gradient from left to right
      color: '#fff'}} variant="dark" expand="lg" fixed="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/About">About Me</Nav.Link>
          <Nav.Link as={Link} to="/Education">Education</Nav.Link>
          <Nav.Link as={Link} to="/Hobbies">Hobbies</Nav.Link>
          <Nav.Link as={Link} to="/Contacts">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;