//Not done yet
"use client";
import React, { useState } from "react";
import mcqs from "./mcqData"; // Adjust the path based on your directory structure

const Page = () => {
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(mcqs.length).fill(null)
  ); // Track selected answers
  const [submitted, setSubmitted] = useState(Array(mcqs.length).fill(false)); // Track submission state
  const [score, setScore] = useState(0); // Track score

  const handleOptionChange = (questionIndex, selectedOption) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = selectedOption;
    setSelectedAnswers(newAnswers);

    // Update submission state and calculate score
    const newSubmitted = [...submitted];
    newSubmitted[questionIndex] = true;
    setSubmitted(newSubmitted);

    if (selectedOption === mcqs[questionIndex].answer) {
      setScore(score + 1); // Increase score for the correct answer
    }
  };

  const handleReset = () => {
    setSelectedAnswers(Array(mcqs.length).fill(null)); // Reset all selected answers
    setSubmitted(Array(mcqs.length).fill(false)); // Reset submission status
    setScore(0); // Reset score
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 pt-32 overflow-y-auto">
      <h1 className="text-2xl mb-4"> BIOMOLECULES</h1>

      <div>
        {mcqs.map((mcq, questionIndex) => (
          <div key={questionIndex} className="mb-6">
            <h2 className="text-lg font-semibold mb-2">
              {questionIndex + 1}. {mcq.question}
            </h2>
            <ul className="list-lower-alpha list-inside">
              {mcq.options.map((option, idx) => (
                <li key={idx} className="ml-4 flex items-center">
                  <input
                    type="checkbox"
                    disabled={submitted[questionIndex]} // Disable once submitted
                    checked={selectedAnswers[questionIndex] === option}
                    onChange={() => handleOptionChange(questionIndex, option)}
                    className="mr-2"
                  />
                  <span>{option}</span>
                </li>
              ))}
            </ul>
            {submitted[questionIndex] && (
              <div className="mt-2">
                {selectedAnswers[questionIndex] === mcq.answer ? (
                  <span className="text-green-600">✔️ Correct</span>
                ) : (
                  <span className="text-red-600">❌ Incorrect</span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Score and Reset Button fixed to the right */}
      <div className="fixed top-32 right-4">
        <button className="button-74" onClick={handleReset} role="button">
          Reset
        </button>

        <div className="mb-4 text-lg bg-transparent  p-2  rounded-lg">
          <strong>
            Score: {score}/{mcqs.length}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Page;
