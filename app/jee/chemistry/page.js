import Link from "next/link";
import React from "react";

const ChemistryPage = () => {
  return (
    <>
      <div className="h-screen flex flex-row items-center">
        <div
          className="w-1/2 h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/chemistry.jpg')` }}
        ></div>
        <div className="w-1/2 h-screen flex flex-col justify-center p-20">
          <h1 className="text-4xl text-neutral-900">Chemistry</h1>
          <Link
            href="/jee/chemistry/physical"
            className="my-2 text-lg text-blue-700 underline"
          >
            Physical Chemistry
          </Link>
          <Link
            href="/jee/chemistry/inorganic"
            className="my-2 text-lg text-blue-700 underline"
          >
            Inorganic Chemistry
          </Link>
          <Link
            href="/jee/chemistry/organic"
            className="my-2 text-lg text-blue-700 underline"
          >
            Organic Chemistry
          </Link>
        </div>
      </div>
    </>
  );
};

export default ChemistryPage;