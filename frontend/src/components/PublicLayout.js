import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PublicLayout.css';
import logo from '../assets/logo.png'; // Import your logo image

const PublicLayout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Toggle dark mode styles on the body element
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`public-layout ${darkMode ? 'dark-mode' : ''}`}>
      <header className="header">
        <nav className="nav">
          <div className="nav-links">
            <img src={logo} alt="Marma Logo" className="logo" />
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          <div className="nav-links">
            <button className="button" onClick={toggleDarkMode}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </nav>
      </header>
      <main className="main-content">
        {children} {/* Main Content Will Be Injected Here */}
      </main>
      <footer className="footer">
        <p>&copy; 2023 Marma</p>
      </footer>
    </div>
  );
};

export default PublicLayout;
