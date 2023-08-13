import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
// Import other components as needed
// import SignInPage from './components/SignInPage';
// import SignUpPage from './components/SignUpPage';
// import Dashboard from './components/Dashboard';
// import Profile from './components/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Uncomment and define these routes as you create the components */}
          {/* <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
