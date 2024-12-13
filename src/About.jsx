import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import React from 'react';

function About() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Full viewport height
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const imageContainerStyle = {
    width: '171px',
    height: '180px',
    backgroundImage: 'url(https://via.placeholder.com/171x180)', // Placeholder background
    backgroundSize: 'cover',
    position: 'relative',
    marginBottom: '20px',
    borderRadius: '10px', // Optional: for rounded corners
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px', // Optional: ensures the image is rounded like the container
  };

  const titleStyle = {
    fontSize: '2rem',
    marginBottom: '10px',
  };

  const textStyle = {
    fontSize: '1.2rem',
    color: '#555',
  };
  return (
    <Container fluid style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Row className="justify-content-center text-center">
        <Col xs={12} md={6} className="d-flex flex-column align-items-center">

        <div style={{ marginBottom: '20px' }}>
            <Image
              src="https://lh3.googleusercontent.com/a/ACg8ocIatKlTZz9e4by1usyEOmA6ABIfKpxns5_0WZKqTx5mTJL5pJI=s309-c-no"
              fluid
              style={{
                width: '171px',
                height: '180px',
                objectFit: 'cover',
                borderRadius: '10px', 
                boxShadow: '0px 6px 20px rgba(255, 223, 126, 0.2)'
              }}
              alt="Profile"
            />
          </div>

          <div className="text-center">
            <h1 style={{fontFamily: 'Roboto, sans-serif', fontWeight: 'bold'}}>About Me</h1>
            <p style={{ display: 'flex',color: '#333', justifyContent: 'center', fontWeight: 'bold', fontSize: '17px', fontFamily: 'Roboto, sans-serif', }}>Hi! I'm Marlon B. Alba. I graduated in Pasacao National Highschool, I'm a student-athelete. I'm 19 years old, I was born on August 23, 2005. I'm currently studying at Naga College Foundation, Inc and taking bachelor of science in computer science.  </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;