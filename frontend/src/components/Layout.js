import React from 'react';
import './Layout.css';


const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        {/* Header Content Goes Here */}
      </header>
      <main className="main-content">
        {children} {/* Main Content Will Be Injected Here */}
      </main>
      <footer className="footer">
        {/* Footer Content Goes Here */}
      </footer>
    </div>
  );
};

export default Layout;
