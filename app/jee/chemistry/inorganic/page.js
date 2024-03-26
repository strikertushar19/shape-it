import React from "react";
//import { mathsques } from "../../question/question";

const InOrganic = () => {
  return (
    <div className="pt-24">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">InOrganic Chemistry</h1>
        {/* <ul>
          {mathsques.map((item, index) => (
            <li key={index}>
              <h3 className="text-red-500">{item.question}</h3>
              <p className="text-black">Answer: {item.answer}</p>
            </li>
          ))}
        </ul> */}
        <ul>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/chemistry/inorganic/unit1">
              CLASSIFICATION OF ELEMENTS AND PERIODICITY IN PROPERTIES
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/chemistry/inorganic/unit2">
              P- BLOCK ELEMENTS
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/chemistry/inorganic/unit3">
              d - and f- BLOCK ELEMENTS
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/chemistry/inorganic/unit4">
              CO-ORDINATION COMPOUNDS
              </a>
            </h3>
          </li>
          {/* <li>
            <h3 className="text-red-500">
              Complex Numbers And Quadratic Equations
            </h3>
            <p className="text-black">Answer: page</p>
          </li>
          <li>
            <h3 className="text-red-500">
              Limit, Continuity And Differentiability
            </h3>
            <p className="text-black">Answer: page</p>
          </li>
          <li>
            <h3 className="text-red-500">Matrices And Determinants</h3>
            <p className="text-black">Answer: page</p>
          </li>
          <li>
            <h3 className="text-red-500">Permutations And Combinations</h3>
            <p className="text-black">Answer: page</p>
          </li>
          <li>
            <h3 className="text-red-500">Probability</h3>
            <p className="text-black">Answer: page</p>
          </li>
          <li>
            <h3 className="text-red-500">Sequence And Series</h3>
            <p className="text-black">Answer: page</p>
          </li>
          <li>
            <h3 className="text-red-500">Sets, Relations And Functions</h3>
            <p className="text-black">Answer: page</p>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default InOrganic;
