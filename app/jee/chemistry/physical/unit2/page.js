import React from "react";
import mcqs from "./mcqData"; // Adjust the path based on your directory structure

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 pt-32 overflow-y-auto">
      <h1 className="text-2xl mb-4">ATOMIC STRUCTURE</h1>
      <div>
        {mcqs.map((mcq, index) => (
          <div key={index} className="mb-6">
            {/* Adding question number */}
            <h2 className="text-lg font-semibold mb-2">
              {index + 1}. {mcq.question}
            </h2>
            <ul className="list-lower-alpha list-inside">
              {mcq.options.map((option, idx) => (
                <li key={idx} className="ml-4">
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Displaying answers at the bottom */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Answers</h2>
        <ul className="list-decimal list-inside">
          {mcqs.map((mcq, index) => (
            <li key={index} className="mb-2">
              {mcq.answer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
