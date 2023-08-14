import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="tunnel">
        <h1>Welcome to Marma!</h1>
        <p>Explore, Learn, and Master Data Analytics.</p>
      </div>
      <div className="buttons">
        <Link to="/signup" className="button explore-button">Start Your Exploration</Link>
      </div>
    </div>
  );
}

export default LandingPage;
