import React from "react";

interface Counsellor {
  name: string;
  imageUrl: string;
  title: string;
  position: string;
}

const counsellors: Counsellor[] = [
  {
    name: "Prof. Chaminda Rathnayake",
    imageUrl: "https://via.placeholder.com/150",
    title: "Deputy Vice Chancellor at NSBM",
    position: "Branch Counsellor",
  },
  {
    name: "Ms. Dulanjali Wijesekara",
    imageUrl: "https://via.placeholder.com/150",
    title: "Senior Lecturer at NSBM",
    position: "MIC - Faculty of Computing",
  },
  {
    name: "Mrs. Narmada Ranaweera",
    imageUrl: "https://via.placeholder.com/150",
    title: "Senior Lecturer at NSBM",
    position: "MIC - Faculty of Engineering",
  },
  {
    name: "Ms. Kaumadee Samarakoon",
    imageUrl: "https://via.placeholder.com/150",
    title: "Senior Lecturer at NSBM",
    position: "MIC - WIE Affinity Group",
  },
  {
    name: "Mr. Iman Ashly",
    imageUrl: "https://via.placeholder.com/150",
    title: "Senior Lecturer at NSBM",
    position: "MIC - CS Student Branch Chapter",
  },
];

const BranchCounsellors: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl lg:text-6xl font-bold text-center">
        STUDENT BRANCH COUNSELLORS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-12 xl:px-40 lg:px-10">
        {counsellors.slice(0, 3).map((counsellor) => (
          <div
            key={counsellor.name}
            className="flex flex-col items-center text-center "
          >
            <img
              src={counsellor.imageUrl}
              alt={counsellor.name}
              className="rounded-full w-36 h-36 mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{counsellor.name}</h2>
            <p className="text-base font-bold text-gray-600">
              {counsellor.title}
            </p>
            <p className="text-base font-bold text-gray-600 mb-2">
              {counsellor.position}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 xl:px-80 lg:px-40">
        {counsellors.slice(3).map((counsellor) => (
          <div
            key={counsellor.name}
            className="flex flex-col items-center text-center"
          >
            <img
              src={counsellor.imageUrl}
              alt={counsellor.name}
              className="rounded-full w-36 h-36 mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{counsellor.name}</h2>
            <p className="text-base font-bold text-gray-600">
              {counsellor.title}
            </p>
            <p className="text-base font-bold text-gray-600 mb-2">
              {counsellor.position}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BranchCounsellors;
