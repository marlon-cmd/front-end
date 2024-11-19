import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Contacts() {
  return (
    <div style={{ padding: '20px', marginTop: '50px' }}>
      <h1>Contact Me</h1>
      <p>Here's how you can get in touch with me.</p>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px', color: '#007bff' }} />
          <span style={{ color: 'black' }}>Gmail: </span>
          <a href="mailto:marlon.personalemail@gmail.com" style={{ textDecoration: 'none' }}>
            marlon.personalemail@gmail.com
          </a>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px', color: '#007bff' }} />
          <span style={{ color: 'black' }}>Contact Number: </span>
          <a href="tel:09453864263" style={{ textDecoration: 'none' }}>
            09453864263
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '10px', color: '#007bff' }} />
          <span style={{ color: 'black' }}>Facebook: </span>
          <a
            href="https://web.facebook.com/marlon.alba.758"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            Marlon Alba
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
