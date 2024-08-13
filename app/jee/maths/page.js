import React from "react";
const mathsques = [
  {
    title: "Binomial Theorem And Its Simple Applications",
    href: "binomialTheoremAndItsSimpleApplications",
  },
  {
    title: "Complex Numbers And Quadratic Equations",
    href: "complexNumbersAndQuadraticEquations",
  },
  { title: "Coordinate Geometry", href: "coordinateGeometry" },
  { title: "Differential Equations", href: "differentialEquations" },
  { title: "Integral Calculus", href: "integralCalculus" },
  { title: "Matrices And Determinants", href: "matricesAndDeterminants" },
  {
    title: "Permutations And Combinations",
    href: "permutationsAndCombinations",
  },
  { title: "Probability", href: "probability" },
  { title: "Sets Relations And Functions", href: "setsRelationsAndFunctions" },
  { title: "Statistics And Probability", href: "statisticsAndProbability" },
  { title: "Trigonometry", href: "trigonometry" },
  {
    title: "Limits, Continuity And Differentiability",
    href: "limitContinuityAndDifferentiability",
  },
  { title: "3D Geometry", href: "threeDimensionalGeometry" },
  { title: "Vector Algebra", href: "vectorAlgebra" },
];
const MathsPage = () => {
  return (
    <div className="pt-24 h-screen flex flex-row">
      <div className="h-full w-1/2">
        <img
          src="/maths.jpg"
          alt="Maths"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-full w-1/2 flex flex-col justify-center p-20">
        <h1 className="text-3xl font-bold mb-4">Maths Chapters</h1>
        <ul>
          {mathsques.map((ques, index) => (
            <li key={index}>
              <h3 className="text-red-500">
                <a
                  className="text-blue-700 underline"
                  href={`/jee/maths/${ques.href}`}
                >
                  {ques.title}
                </a>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MathsPage;
