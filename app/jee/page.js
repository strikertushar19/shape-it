import { Link } from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      {" "}
      <div className="h-screen w-screen flex flex-row items-center">
        <div
          className="w-1/2 h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('jee.jpg')` }}
        ></div>
        <div className="w-1/2 h-screen flex flex-col justify-center  p-20">
          <h1 className="text-4xl text-neutral-900  ">JEE</h1>
          <h2 className="text-2xl text-neutral-900  ">
            Choose a subject click the links
          </h2>
          <a
            className="my-2 text-lg  text-blue-700 underline"
            href="/jee/chemistry"
          >
            chemistry
          </a>
          <a className="my-2 text-lg   text-blue-700 underline" href="/jee/maths">
            maths
          </a>
          <a
            className="my-2  text-lg text-blue-700 underline"
            href="/jee/physics"
          >
            physics
          </a>
        </div>
      </div>
    </>
  );
};

export default page;
