import React from "react";
const Navbar = () => {
  return (
    <>
      {" "}
      <div className="flex items-center justify-center pt-8 pb-4 border-b-2 shadow-xl fixed bg-white w-full">
        <div className="container flex flex-col lg:flex-row justify-between items-center w-1/3 mx-auto">
          <h1 className="font-bold text-3xl lg:text-4xl"><a href="/">ShapeIT</a></h1>
          <div className="flex flex-col lg:flex-row justify-center text-xl lg:text-2xl lg:justify-between items-center gap-10">
            <a href="/jee">jee</a>
            <p className="nav-link">About Us</p>
            {/* <p className="nav-link">Pricing</p> */}
            {/* <p className="nav-link">Careers</p> */}
            <p className="nav-link">Blog</p>
          </div>
          {/* <button className="btn bg-blue-300 p-4 text-black hover:bg-[#4744e2] hover:text-white capitalize rounded-2xl">
            Sign Up
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
