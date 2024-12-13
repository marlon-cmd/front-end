import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Home.css';
import './Contacts'

function Home() {
  return (
    <div className="hero-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
          <br></br>
            <h1 style={{fontWeight: 'bold'}}>Hi! I'm Marlon</h1>
            <h2 style={{fontWeight: 'bold'}}>I'M A COMPUTER SCIENCE STUDENT</h2>
            <p style={{fontWeight: 'bold'}}>A mediocre student who loves doing average stuff.</p>
            <Button variant="primary" className="ms-2" as={Link} to="/Contacts">Get in Touch</Button>
            <div className="social-icons mt-3">
              <a href="https://github.com/marlon-cmd" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} className="mr-3" />
              </a>
              <a href="https://web.facebook.com/marlon.alba.758" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className="mr-3" />
              </a>
              <a href="https://www.instagram.com/prec8.marlon/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} />
              </a>
            </div>
          </Col>
          <Col md={6}>
            <img src="https://scontent.fmnl34-1.fna.fbcdn.net/v/t39.30808-6/461804748_1594359064756907_7590059470361776861_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeFNxfPaUKPkSULsQJKlKLgWUBRPkSILbWtQFE-RIgttaza6oirV3yBznhEDHpI8S8PniC_RWoG3OkzJKrdTCWG8&_nc_ohc=JcbnU5HyEKYQ7kNvgE96wlc&_nc_zt=23&_nc_ht=scontent.fmnl34-1.fna&_nc_gid=AfKO4wDuCwn-WHUcUKOlo52&oh=00_AYDM4_5fvOg_gqj8wkRMLsXFzfozi8v4lF2-VvWxcBeVfA&oe=6761337A"
            alt="Marlon Alba" 
            className="profile-img" 
            style={{ textAlign: 'right', width: '85%', height: '40%', marginTop: '70px', marginRight: '500px', borderRadius: '10px', boxShadow: '0px 6px 20px rgba(255, 223, 126, 0.2)' }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;