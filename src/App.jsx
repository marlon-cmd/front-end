import './App.css'

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import Education from './Education';
import Hobbies from './Hobbies';
import Header from './Header';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {

  return ( 
    <Router>
      <div className="App"> 
        {/* Navigation Links */}
        <Navbar bg="primary" expand="lg" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">My Perosnal Website</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/home" activeClassName="active-link">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/About" activeClassName="active-link">About</Nav.Link>
              <Nav.Link as={NavLink} to="/Contacts" activeClassName="active-link">Contacts</Nav.Link>
              <Nav.Link as={NavLink} to="/Education" activeClassName="active-link">Education</Nav.Link>
              <Nav.Link as={NavLink} to="/Hobbies" activeClassName="active-link">Hobbies</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Hobbies" element={<Hobbies />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
