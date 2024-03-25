import { Link } from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col border-[10px] border-neutral-900 items-center h-screen">
      <h1 className="text-4xl p-20 border-10 border-neutral-900 sm:mt-[300px] md:mt-[250px] xl:mt-[100px] lg:mt-[100px]  text-center m-5 very-small-device">JEE</h1>
        <div className="flex flex-col items-center">
          <a className="my-2" href="/jee/chemistry">
            chemistry
          </a>
          <a className="my-2" href="/jee/maths">
            maths
          </a>
          <a className="my-2" href="/jee/physics">
            physics
          </a>
        </div>
      </div>
    </>
  );
};

export default page;
