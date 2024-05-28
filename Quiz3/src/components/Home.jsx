
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home_page">
      <p>Quiz App</p>
      <Link to="/quiz"><button>Play</button></Link>
    </div>
  );
}

export default HomePage;