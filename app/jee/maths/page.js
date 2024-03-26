import React from "react";
import { mathsques } from "../../question/question";

const MathsPage = () => {
  return (
    <div className="pt-24">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Maths Chapters</h1>
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
              <a className="my-2" href="/jee/maths/binomialTheoremAndItsSimpleApplications" >
                Binomial Theorem And Its Simple Applications
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/maths/complexNumbersAndQuadraticEquations">
              Complex Numbers And Quadratic Equations
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/maths/binomialTheoremAndItsSimpleApplications">
                Binomial Theorem And Its Simple Applications
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/maths/binomialTheoremAndItsSimpleApplications">
                Binomial Theorem And Its Simple Applications
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/maths/binomialTheoremAndItsSimpleApplications">
                Binomial Theorem And Its Simple Applications
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/maths/binomialTheoremAndItsSimpleApplications">
                Binomial Theorem And Its Simple Applications
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/maths/binomialTheoremAndItsSimpleApplications">
                Binomial Theorem And Its Simple Applications
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

export default MathsPage;
