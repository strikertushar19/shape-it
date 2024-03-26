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
              <a className="my-2" href="/jee/maths/binomialTheoremAndItsSimpleApplications">
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
              <a className="my-2" href="/jee/maths/coordinateGeometry">
              Coordinate Geometry
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/maths/differentialEquations">
              Differential Equations
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/maths/integralCalculus">
              Integral Calculus
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/maths/matricesAndDeterminants">
              Matrices And Determinants
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/maths/permutationsAndCombinations">
              Permutations And Combinations
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/maths/probability">
              Probability
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/maths/setsRelationsAndFunctions">
              Sets Relations And Functions
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/maths/StatisticsAndProbability">
              Statistics And Probability
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/maths/trigonometry">
              Trigonometry
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/maths/limitContinuityAndDifferentiability">
              Limits, Continuity And Differentiability
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/maths/ThreeDimensionalGeometry">
              3D Geometry
              </a>
            </h3>
            
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/maths/VectorAlgebra">
              Vector Algebra
              </a>
            </h3>
          </li>
          

          
        </ul>
      </div>
    </div>
  );
};

export default MathsPage;
