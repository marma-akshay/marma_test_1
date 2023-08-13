import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicLayout from './components/PublicLayout';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import './App.css';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('dark'); // Default theme is set to dark

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Router>
        <Routes>
          <Route path="/" element={<PublicLayout><LandingPage /></PublicLayout>} />
          <Route path="/signin" element={<PublicLayout><SignIn /></PublicLayout>} />
          <Route path="/signup" element={<PublicLayout><SignUp /></PublicLayout>} />
          <Route path="/faq" element={<PublicLayout><FAQ /></PublicLayout>} />
          <Route path="/aboutus" element={<PublicLayout><AboutUs /></PublicLayout>} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
