import React from "react";
const physicsques = [
  {
    title: "Physics and Measurement",
    href: "Unit1",
  },
  {
    title: "Kinematics",
    href: "Unit2",
  },{
    title: "Laws of Motion",
    href: "Unit3",
  },{
    title: "Work, Energy, and Power",
    href: "Unit4",
  },{
    title: "Rotational Motion",
    href: "Unit5",
  },{
    title: "Gravitation",
    href: "Unit6",
  },{
    title: "Properties of Solids and Liquids",
    href: "Unit7",
  },{
    title: "Thermodynamics",
    href: "Unit8",
  },{
    title: "Kinetic Theory of Gases",
    href: "Unit9",
  },{
    title: "Oscillations and Waves",
    href: "Unit10",
  },{
    title: "Electrostatics",
    href: "Unit11",
  },{
    title: "Current Electricity",
    href: "Unit12",
  },{
    title: "Magnetic Effects of Current and Magnetism",
    href: "Unit13",
  },{
    title: "Electromagnetic Induction and Alternating Currents",
    href: "Unit14",
  },{
    title: "Electromagnetic Waves",
    href: "Unit15",
  },{
    title: "Optics",
    href: "Unit16",
  },{
    title: "Dual Nature of Matter and Radiation",
    href: "Unit17",
  },{
    title: "Atoms and Nuclei",
    href: "Unit18",
  },{
    title: "Electronic Devices",
    href: "Unit19",
  },{
    title: "Communication System",
    href: "Unit20",
  },
];
const PhysicsPage = () => {
  return (
    <div className="pt-24 h-screen flex flex-row">
      <div className="h-full w-1/2">
        <img
          src="/Physics.jpg"
          alt="Physics"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-full w-1/2 flex flex-col justify-center p-20">
        <h1 className="text-3xl font-bold mb-4">Physics Chapters</h1>
        <ul>
          {physicsques.map((ques, index) => (
            <li key={index}>
              <h3 className="text-red-500">
                <a
                  className="text-blue-700 underline"
                  href={`/jee/physics/${ques.href}`}
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

export default PhysicsPage;
