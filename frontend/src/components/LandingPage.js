import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to Marma!</h1>
      <p>Explore, Learn, and Master Data Analytics.</p>
      <div className="buttons">
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}

export default LandingPage;
