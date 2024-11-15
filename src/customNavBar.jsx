import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

function customNavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Marlon</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#About">About Me</Nav.Link>
          <Nav.Link href="#Education">Education</Nav.Link>
          <Nav.Link href="#Hobbies">Hobbies</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
          <Button variant="Primary" className="ml-3">Let's Talk</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default customNavBar;
