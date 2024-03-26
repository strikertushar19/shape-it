import React from "react";
import {chemistryques} from "../../question/question"; 

const ChemistryPage = () => {
  return (
    <div className="pt-24">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Chemistry chapters</h1>
        {/* <ul>
          {chemistryques.map((item, index) => (
            <li key={index}>
              <h3 className="text-red-500">{item.question}</h3>
              <p className="text-black">Answer: {item.answer}</p>
            </li>
          ))}
        </ul> */}
      
      </div>
    </div>
  );
}

export default ChemistryPage;
