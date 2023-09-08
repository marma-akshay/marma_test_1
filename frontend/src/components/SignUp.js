import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.css';
import logo from '../assets/logo.png';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

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

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/signin');
      } else {
        setError(data.error || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="sign-up-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      {dataPoints.map((point, index) => {
        let style = {
          top: point.position, 
          left: '0', 
          animation: `moveToPointTopSignUp ${5 + Math.random() * 5}s infinite`, 
          animationDelay: point.animationDelay 
        };
        return (
          <span key={index} className="data-point-signup" style={style}>{point.character}</span>
        );
      })}
      
      <div className="auth-options-signup">
        <div className="auth-options-content-signup">
          <Link to="/signin">Log In</Link>
          <Link to="/AboutUs">About</Link>
          <Link to="/FAQ">FAQ</Link>
        </div>
      </div>

      <div className="sign-up-glass">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp} className="sign-up-form">
          <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="sign-up-button-signup">Sign Up</button>
        </form>
        {error && <p className="error-message-signup">{error}</p>}
      </div>
    </div>
  );
}

export default SignUp;
