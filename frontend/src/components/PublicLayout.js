import React from 'react';
import { Link } from 'react-router-dom';
import './PublicLayout.css';

const PublicLayout = ({ children }) => {
  return (
    <div className="public-layout">
      <header className="header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
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
