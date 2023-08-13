import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        {/* Header Content Goes Here */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>
      <main className="main-content">
        {children} {/* Main Content Will Be Injected Here */}
      </main>
      <footer className="footer">
        {/* Footer Content Goes Here */}
        <p>&copy; 2023 Marma</p>
      </footer>
    </div>
  );
};

export default Layout;
