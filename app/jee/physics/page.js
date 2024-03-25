import React from "react";
import {physicsques} from "../../question/question"; 

const PhysicsPage = () => {
  return (
    <div className="pt-24">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Chemistry Questions</h1>
        <ul>
          {physicsques.map((item, index) => (
            <li key={index}>
              {/* <p className="font-bold">Question {index + 1}:</p> */}
              <h3 className="text-red-500">{item.question}</h3>
              <p className="text-black">Answer: {item.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PhysicsPage;
