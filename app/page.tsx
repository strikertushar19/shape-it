import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex ">
      <div className="flex justify-center items-center h-screen border-neutral-950 border-4 w-screen">
        <div
          className="sm:mt-300 md:mt-250 xl:mt-100 lg:mt-100 very-small-device text-center w-screen h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('front.jpg')` }}
        >
          {" "}
          <p className=" p-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] font-bold text-blue-900 w-screen  text-left">
            Welcome to 
          </p>{" "}
          <p className=" p-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] font-bold text-blue-900 w-screen  text-right">
          ShapeIT
          </p>{" "}
        </div>
      </div>
    </main>
  );
}
