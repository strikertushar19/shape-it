import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex ">
      <div className="flex justify-center items-center h-screen border-neutral-950 border-4 w-screen">
        <div className="sm:mt-300 md:mt-250 xl:mt-100 lg:mt-100 very-small-device text-center w-screen ">
          <p>Welcome to shapeIT</p>
        </div>
      </div>
    </main>
  );
}
