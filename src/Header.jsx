import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'

function Header() {

    const navigate = useNavigate(); // Initialize navigate function

    const handleConnectClick = () => {
        navigate('/Contacts'); //if u click the "Let's Connect" button it will bring you to "contacts"
    };


    return (
        <header className="header">
            <nav>
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </nav>

            <section className="hero">
                <div className="intro-text">
                    <div className="welcome">Welcome to my Personal Website</div>
                    <h1>Hi! I'm Marlon Alba</h1>
                    <p>
                        This is my first personal website that I have made.
                    </p>
                    <button className="connect-button" onClick={handleConnectClick}>
                    Let’s Connect
                </button>
                </div>
            </section>
        </header>
    );
}

export default Header;