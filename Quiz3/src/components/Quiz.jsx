// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import { Link } from "react-router-dom";
import questions from "../resources/quizQuestion.json";


export default class QuizPage extends Component {
  state = {
    questions: questions,
    currentQuestionIndex: 0,
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    numberofAnsweredQuestions: 0,
    currentQuestion: {},
  };

  componentDidMount() {
    this.displayQuestion();
  }

  displayQuestion = () => {
    const { questions, currentQuestionIndex } = this.state;
    const currentQuestion = questions[currentQuestionIndex];
    this.setState({ currentQuestion });
  };

  handleNextButtonClick = () => {
    this.setState(
      (prevState) => ({
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
      }),
      this.displayQuestion
    );
  };

  handlePrevButtonClick = () => {
    if (this.state.currentQuestionIndex > 0) { 
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex - 1,
        }),
        this.displayQuestion
      );
    }
  };

  handleQuitButtonClick = () => {
    if (window.confirm("Are you sure you want to quit?")) {
      window.close(); 
    }
  };

  handleOptionClick = (e) => {
    const selectedOption = e.target.innerHTML;
    const { currentQuestion } = this.state;
    if (selectedOption === currentQuestion.answer) {
      this.correctAnswer();
    } else {
      this.wrongAnswer();
    }
  };

  correctAnswer = () => {
    this.setState(
      (prevState) => ({
        score: prevState.score + 1,
        correctAnswers: prevState.correctAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberofAnsweredQuestions: prevState.numberofAnsweredQuestions + 1,
      }),
      () => {
        alert("Correct answer");
        this.displayQuestion();
      }
    );
  };

  wrongAnswer = () => {
    this.setState(
      (prevState) => ({
        wrongAnswers: prevState.wrongAnswers + 1,
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
        numberofAnsweredQuestions: prevState.numberofAnsweredQuestions + 1,
      }),
      () => {
        alert("Wrong answer");
        this.displayQuestion();
      }
    );
  };

  render() {
    const { currentQuestion, currentQuestionIndex, questions } = this.state;
    return (
      <div className="quiz_page">
        <h1>Question</h1>
        <p className="qn_no">{currentQuestionIndex + 1} of {questions.length}</p>
        <p>{currentQuestion.question}</p>
        <ul className="options">
          <li onClick={this.handleOptionClick}>{currentQuestion.optionA}</li>
          <li onClick={this.handleOptionClick}>{currentQuestion.optionB}</li>
          <li onClick={this.handleOptionClick}>{currentQuestion.optionC}</li>
          <li onClick={this.handleOptionClick}>{currentQuestion.optionD}</li>
        </ul>
        <div className="buttons">
          <button className="prev" onClick={this.handlePrevButtonClick}>
            Previous
          </button>
          <button className="next" onClick={this.handleNextButtonClick}>
            Next
          </button>
          <button className="quit" onClick={this.handleQuitButtonClick}>
            Quit
          </button>
          <Link
            to="/result"
            state={{
              answeredQuestions: this.state.numberofAnsweredQuestions,
              score: this.state.score,
              correctAnswer: this.state.correctAnswers,
              totalQuestions: questions.length,
              wrongAnswer: this.state.wrongAnswers,
            }}
          >
            <button className="finish">Finish</button>
          </Link>
        </div>
      </div>
    );
  }
}
