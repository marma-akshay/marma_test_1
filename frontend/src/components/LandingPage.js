import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const dataPoints = [];
  for (let i = 0; i < 200; i++) {
    const side = Math.floor(Math.random() * 4);
    const position = Math.random() * 100 + "vw";
    const size = Math.random() * 1.3 + "em";

    let character;
    if (Math.random() < 0.8) {
      // 80% chance to generate a number
      character = String.fromCharCode(48 + Math.floor(Math.random() * 10));
    } else {
      // 20% chance to generate a special symbol
      const specialSymbols = ['%', '#', '&', '@', '$','a','d','g','l'];
      character = specialSymbols[Math.floor(Math.random() * specialSymbols.length)];
    }

    const point = {
      character: character,
      side: side,
      position: position,
      size: size,
      animationDelay: `${Math.random() * 5}s`
    };
    dataPoints.push(point);
  }

  return (
    <div className="landing-page">
      {dataPoints.map((point, index) => {
        let style = {
          fontSize: point.size,  // Applying random size to data points
        };
        switch (point.side) {
          case 0:
            style = { ...style, top: 0, left: point.position, animation: `moveToPointTop ${5 + Math.random() * 5}s infinite`, animationDelay: point.animationDelay };
            break;
          case 1:
            style = { ...style, bottom: 0, left: point.position, animation: `moveToPointBottom ${5 + Math.random() * 5}s infinite`, animationDelay: point.animationDelay };
            break;
          case 2:
            style = { ...style, left: 0, top: point.position, animation: `moveToPointLeft ${5 + Math.random() * 5}s infinite`, animationDelay: point.animationDelay };
            break;
          case 3:
            style = { ...style, right: 0, top: point.position, animation: `moveToPointRight ${5 + Math.random() * 5}s infinite`, animationDelay: point.animationDelay };
            break;
          default:
            break;
        }

        return (
          <span key={index} className="data-point" style={style}>{point.character}</span>
        );
      })}
      <div className="auth-options">
        <div className="auth-options-content">
          <Link to="/signin">Log In</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/AboutUs">About</Link>
          <Link to="/FAQ">FAQ</Link>
        </div>
      </div>
      <div className="welcome-section">
        <h1>Welcome to Marma!</h1>
        <p>Where learning makes sense!.</p>
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
