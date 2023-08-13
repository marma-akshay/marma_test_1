import React from 'react';

function FAQ() {
  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="question">
        <h2>What is Marma?</h2>
        <p>Marma is an interactive platform designed to help learners explore, learn, and master data analytics through real-world practical problems and solutions.</p>
      </div>
      <div className="question">
        <h2>How can I get started with Marma?</h2>
        <p>Sign up for a free account, explore our learning modules, and begin your journey towards becoming a data analytics expert.</p>
      </div>
      <div className="question">
        <h2>What kind of support is available?</h2>
        <p>We offer AI-driven hints, suggestions, and chatbot support to guide you through complex analytics problems.</p>
      </div>
      {/* Add more questions as needed */}
    </div>
  );
}

export default FAQ;
