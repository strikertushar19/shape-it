import Link from "next/link";
import React from "react";

const ChemistryPage = () => {
  return (
    <>
      <div className="flex flex-col border-[10px] border-neutral-900 items-center h-screen">
        <h1 className="text-4xl p-20 border-10 border-neutral-900 sm:mt-[300px] md:mt-[250px] xl:mt-[100px] lg:mt-[100px]  text-center m-5 very-small-device">Chemistry</h1>
        <div className="flex flex-col items-center">
          <Link href="/jee/chemistry/physical">
            Physical Chemistry
          </Link>
          <Link href="/jee/chemistry/inorganic">
            Inorganic Chemistry
          </Link>
          <Link href="/jee/chemistry/organic">
            Organic Chemistry
          </Link>
        </div>
      </div>
    </>
  );
};

export default ChemistryPage;
