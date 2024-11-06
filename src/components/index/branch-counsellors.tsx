import DVC from "@/assets/bc-and-excom/dvc.png";
import placeholder from "@/assets/placeholder.png";
import Image from "next/image";
import React from "react";

import { StaticImageData } from "next/image";

interface Counsellor {
  name: string;
  imageUrl: string | StaticImageData;
  title: string;
  position: string;
}

const counsellors: Counsellor[] = [
  {
    name: "Prof. Chaminda Rathnayake",
    imageUrl: DVC,
    title: "Deputy Vice Chancellor at NSBM",
    position: "Branch Counsellor",
  },
  {
    name: "Mr. Gayan Perera",
    imageUrl: placeholder,
    title: "Senior Lecturer at NSBM",
    position: "MIC - Faculty of Computing",
  },
  {
    name: "Ms. Kaumadee Samarakoon",
    imageUrl: placeholder,
    title: "Senior Lecturer at NSBM",
    position: "Advisor - IEEE of WIE Affinity Group of NSBM",
  },
];

const BranchCounsellors: React.FC = () => {
  return (
    <div className="container mx-auto p-4 max-w-[1170px]">
      <h1 className="text-4xl lg:text-6xl font-bold text-center">
        STUDENT BRANCH COUNSELLORS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-12">
        {counsellors.slice(0, 3).map((counsellor) => (
          <div
            key={counsellor.name}
            className="flex flex-col items-center text-center "
          >
            <Image
              src={counsellor.imageUrl}
              alt={counsellor.name}
              width={200}
              height={400}
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
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
        {counsellors.slice(3).map((counsellor) => (
          <div
            key={counsellor.name}
            className="flex flex-col items-center text-center"
          >
            <Image
              src={counsellor.imageUrl}
              alt={counsellor.name}
              width={150}
              height={150}
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
