import React from "react";
//import { mathsques } from "../../question/question";

const Organic = () => {
  return (
    <div className="pt-24">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Organic Chemistry</h1>
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
              <a className="my-2" href="/jee/chemistry/organic/unit1">
              PURIFICATION AND CHARACTERISATION OF ORGANIC COMPOUNDS
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/chemistry/organic/unit2">
              SOME BASIC PRINCIPLES OF ORGANIC CHEMISTRY
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/chemistry/organic/unit3">
              HYDROCARBONS
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/chemistry/organic/unit4">
              ORGANIC COMPOUNDS CONTAINING HALOGENS
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/chemistry/organic/unit5">
              ORGANIC COMPOUNDS CONTAINING OXYGEN
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/chemistry/organic/unit6">
              ORGANIC COMPOUNDS CONTAINING NITROGEN
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/chemistry/organic/unit7">
              BIOMOLECULES
              </a>
            </h3>
          </li>
          <li>
            <h3 className="text-red-500">
              <a className="my-2" href="/jee/chemistry/organic/unit8">
              PRINCIPLES RELATED TO PRACTICAL CHEMISTRY
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

export default Organic;
