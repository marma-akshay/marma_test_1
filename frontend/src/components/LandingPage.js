import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const dataPoints = [];
  for (let i = 0; i < 200; i++) {
    const side = Math.floor(Math.random() * 4);
    const position = Math.random() * 100 + "vw";
    const point = {
      character: String.fromCharCode(33 + Math.floor(Math.random() * (126 - 33))),
      side: side,
      position: position,
      animationDelay: `${Math.random() * 5}s`
    };
    dataPoints.push(point);
  }

  return (
    <div className="landing-page">
      {dataPoints.map((point, index) => {
        let style = {};
        switch (point.side) {
          case 0:
            style = { top: 0, left: point.position, animation: `moveToPointTop ${5 + Math.random() * 5}s infinite`, animationDelay: point.animationDelay };
            break;
          case 1:
            style = { bottom: 0, left: point.position, animation: `moveToPointBottom ${5 + Math.random() * 5}s infinite`, animationDelay: point.animationDelay };
            break;
          case 2:
            style = { left: 0, top: point.position, animation: `moveToPointLeft ${5 + Math.random() * 5}s infinite`, animationDelay: point.animationDelay };
            break;
          case 3:
            style = { right: 0, top: point.position, animation: `moveToPointRight ${5 + Math.random() * 5}s infinite`, animationDelay: point.animationDelay };
            break;
          default:
            break;
        }

        return (
          <span key={index} className="data-point" style={style}>{point.character}</span>
        )
      })}
        <div className="auth-options">
        <div className="auth-options-content">
          <Link to="/signin">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
      <div className="welcome-section">
        <h1>Welcome to Marma!</h1>
        <p>Explore, Learn, and Master Data Analytics.</p>
        <div className="buttons">
          <Link to="/signup" className="button">
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
