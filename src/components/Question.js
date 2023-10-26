import React, { useState } from 'react';

function Question({ question, onAnswer }) {
  const [answered, setAnswered] = useState(false);

  function handleAnswerClick(points, answer, index) {
    setAnswered(true);
    onAnswer(points, answer, index);
  }

  return (
    <div className="box mt-6">
      <h2 className="subtitle is-2">{question.question}</h2>
      <div className="buttons is-centered">
        {question.answers.map((option, index) => (
          <button
            key={index}
            className={`button ${answered ? 'is-static' : ''}`}
            onClick={() => handleAnswerClick(question.points[index], question.answers[index], index)}
            disabled={answered}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;