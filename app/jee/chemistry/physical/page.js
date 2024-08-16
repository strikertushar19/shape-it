import React from "react";

//import { mathsques } from "../../question/question";

const Physical = () => {
  return (
    <div className="pt-24">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Physical Chemistry</h1>
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
              <a className="my-2" href="/jee/chemistry/physical/unit1">
              SOME BASIC CONCEPTS IN CHEMISTRY
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/chemistry/physical/unit2">
              ATOMIC STRUCTURE
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/chemistry/physical/unit3">
              CHEMICAL BONDING AND MOLECULAR STRUCTURE
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/chemistry/physical/unit4">
              CHEMICAL THERMODYNAMICS
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/chemistry/physical/unit5">
              SOLUTIONS
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/chemistry/physical/unit6">
              EQUILIBRIUM
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/chemistry/physical/unit7">
              REDOX REACTIONS AND ELECTROCHEMISTRY
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/chemistry/physical/unit8">
              CHEMICAL KINETICS
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

export default Physical;
