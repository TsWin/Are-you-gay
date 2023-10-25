import React, { useState } from 'react';
import Question from '../components/Question';
import loadQuestions from '../assets/questions/index';
import scoreFinder from '../assets/questions/scoreFinder';

function Quiz() {
  const [questions, setQuestions] = useState(loadQuestions('fr')); 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [numAnswers, setNumAnswers] = useState(0);
  const [language, setLanguage] = useState('fr');
  const [score, setScore] = useState(0);
  console.log(questions);
  function handleAnswer(points) {
    setNumAnswers(numAnswers + 1);
    setCurrentQuestion(currentQuestion + 1);
    setScore(score + points);
  }

  function handleLanguageChange(event) {
    setLanguage(event.target.value);
    setQuestions(loadQuestions(event.target.value));
  }

  return (
    <div>
        <div>
        Select language:
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
      </div>
      {/* {currentQuestion < questions.length && (
        <Question
          key={numAnswers}
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      )} */}
      {/* When question is answered go to the next question */}
      {currentQuestion < questions.length && (
        <Question
          key={numAnswers}
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      )}
      {/* When all questions are answered show the score */}
      {currentQuestion === questions.length && (
        <div>
          <h2>Score: {score}/20</h2>
          <h2>{scoreFinder(score)}</h2>
        </div>
      )}
    </div>
  );
}

export default Quiz;