import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

import ieeeCsColorBlack from "@/assets/ieee-cs-colored-black.png";
import ieeeSbLogo from "@/assets/ieee-sb-new-colored.png";
import mission from "@/assets/mission.png";
import vision from "@/assets/vision.png";
import wieLogo from "@/assets/wie-colored.png";

const VisionMissionSection = () => {
  return (
    <div className="container mx-auto xl:px-44 mb-6 px-3">
      <div className="grid justify-items-center lg:grid-cols-3 sm:grid-cols-3 grid-cols-1 mb-10 mt-10 ">
        <Image
          src={ieeeSbLogo}
          className="w-60 mb-5 sm:w-80 sm:pt-10 sm:ms-36 pt-4"
          alt="SBLogo"
          width={2000}
          height={2000}
        />
        <Image
          src={wieLogo}
          className="w-24 mb-5 sm:pt-2 sm:w-28 ms-1 sm:me-3"
          alt="WIELogo"
          width={2000}
          height={2000}
        />
        <Image
          src={ieeeCsColorBlack}
          alt="IEEE CS Logo"
          className="w-44  sm:mt-4 sm:w-56 xl:w-60 mt-2 sm:me-48"
          width={1500}
          height={1500}
        />
      </div>
      <div className="grid justify-items-center lg:me-4 sm:grid-cols-2 grid-cols-1 ">
        <Card className="shadow-lg sm:w-96 mt-5 sm:ms-20 bg-stone-100 border-none">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex">
              <Image
                src={mission}
                className="w-6 dark:invert m-1 pb-1"
                alt="missionLogo"
                width={1000}
                height={1000}
              />
              OUR <p className="text-cyan-600 ms-2">MISSION</p>
            </CardTitle>
            <CardDescription className="text-sm text-slate-700">
              The Student Chapter of IEEE NSBM advises the community on ethics
              policy and concerns as well as fostering awareness on ethical
              issues and promoting ethical behavior amongst individuals and
              organizations working within the IEEE fields of interest.
            </CardDescription>
          </CardHeader>
        </Card>
        <div className=" sm:hidden lg:hidden"></div>
        <Card
          className="shadow-lg sm:w-96 sm:me-16 border-none mt-5 bg-stone-100"
          id="card"
        >
          <CardHeader>
            <CardTitle className="text-lg font-bold flex">
              <Image
                src={vision}
                className="w-6 mb-1 mt-1 dark:invert me-2 pb-1"
                alt="visionLogo"
                id="cardImg"
                width={1000}
              />
              OUR <p className="text-cyan-600 ms-2">VISION</p>
            </CardTitle>
            <CardDescription className="text-sm text-slate-700" id="cardDes">
              A world in which engineers and scientists are respected for their
              exemplary ethical behavior and the IEEE and its Ethics & Member
              Conduct Committee are recognized as a major drive in this regard.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};
export default VisionMissionSection;
