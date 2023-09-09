import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css'; // Import the new CSS file
import logo from '../assets/logo.png'; // Import the logo

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dataPoints = [];
  for (let i = 0; i < 100; i++) {
    const position = Math.random() * 100 + "vh";
    const point = {
      character: String.fromCharCode(33 + Math.floor(Math.random() * (126 - 33))),
      position: position,
      animationDelay: `${Math.random() * 5}s`
    };
    dataPoints.push(point);
  }

  const gridSquares = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      gridSquares.push({ id: i * 10 + j });
    }
  }

  const handleSignIn = async (e) => {
    e.preventDefault();

    // Sending POST request to the backend
    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save token to localStorage (or other secure storage)
        localStorage.setItem('token', data.token);

        // Redirect to Dashboard page on successful login
        window.location.href = '/dashboard';
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="sign-in-container">
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
      {dataPoints.map((point, index) => {
        let style = {
          top: point.position, 
          left: '0', 
          animation: `moveToPointTopSignIn ${5 + Math.random() * 5}s infinite`, 
          animationDelay: point.animationDelay 
        };
        return (
          <span key={index} className="data-point-signin" style={style}>{point.character}</span>
        );
      })}
      
      <div className="auth-options-signin">
        <div className="auth-options-content-signin">
          <Link to="/signup">Sign Up</Link>
          <Link to="/AboutUs">About</Link>
          <Link to="/FAQ">FAQ</Link>
        </div>
      </div>

      <div className="sign-in-glass">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn} className="sign-in-form">
          <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
        {error && <p className="error-message-signin">{error}</p>}
      </div>
    </div>
  );
}

export default SignIn;
