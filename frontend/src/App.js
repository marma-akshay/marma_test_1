import React from 'react';
import Layout from './components/Layout'; // Import the Layout component
import './App.css'; // Keep your existing App.css for any global styles

function App() {
  return (
    <Layout>
      <div className="App">
        <h1>Welcome to Marma</h1>
        <p>Your interactive platform for learning data analytics!</p>
        {/* Additional content and routes will go here */}
      </div>
    </Layout>
  );
}

export default App;
