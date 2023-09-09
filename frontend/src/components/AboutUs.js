import React from 'react';
import './AboutUs.css'; // Import the new CSS file
import logo from '../assets/logo.png'; // Import the logo
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function AboutUs() {
  const gridSquares = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      gridSquares.push({ id: i * 10 + j });
    }
  }

  return (
    <div className="about-us-container">
      <div className="grid-background">
        {gridSquares.map(square => (
          <div key={square.id} className="grid-square"></div>
        ))}
      </div>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="auth-options-aboutus">
        <div className="auth-options-content-aboutus">
          <Link to="/signin">Log In</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/FAQ">FAQ</Link>
        </div>
      </div>
      <div className="about-us-glass">
        <h1>About Us</h1>
        <p>
          In the dynamic landscape of data analytics, the real skill is not just in accumulating knowledge but in applying it in the most effective way. That’s where we come in. We are here to guide you in honing your skills through practical, hands-on problem-solving experiences that mirror real-world challenges.
        </p>
        <p>
          Our journey began with a simple yet profound realization - mastering data analytics is best achieved through practical experience. We have curated a series of challenges that not only teach you the fundamentals of data analytics but also test your ability to apply them in real-world scenarios.
        </p>
        <p>
          Whether you are a budding data enthusiast eager to learn the ropes or a seasoned professional looking to sharpen your skills, our platform offers a space to learn, grow, and master the art of data analytics.
        </p>
        <p>
          Join us in this exciting journey and craft your path to becoming a data analytics maestro. Let's craft data solutions, one problem at a time.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
