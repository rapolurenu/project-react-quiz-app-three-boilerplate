// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function ResultPage() {
  const location = useLocation();

  return (
    <div className="results_page">
      <h1>Result</h1>
      <div className="result">
        <b>You need more practice!</b>
        <p><b>Your score is 20%</b></p>
        <ul>
          <li>Total number of questions <span>{location.state.totalQuestions}</span></li>
          <li>Number of attempted questions <span>{location.state.answeredQuestions}</span></li>
          <li>Number of correct answers <span>{location.state.correctAnswer}</span></li>
          <li>Number of wrong answers <span>{location.state.wrongAnswer}</span></li>
        </ul>
      </div>

      <div className="buttons">
        <Link to="/quiz"><button>Play Again</button></Link>
        <Link to="/"><button>Back to Home</button></Link>
      </div>
    </div>
  );
}