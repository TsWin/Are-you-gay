import React, { useState } from 'react';

function Question({ question, onAnswer }) {
  const [answered, setAnswered] = useState(false);

  function handleAnswerClick(points) {
    setAnswered(true);
    onAnswer(points);
  }

  // data example:
//   {
//     "id": 1,
//     "question": "Avez vous déjà fait une olive à quelqu’un du même genre que le vôtre ?",
//     "answers": ["Oui", "Non"],
//     "points": [1, 0]
// },

// Don't check if answer is correct just send the point back to the parent

  return (
    <div>
      <h2>{question.question}</h2>
      {question.answers.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswerClick(question.points[index])}
          disabled={answered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Question;