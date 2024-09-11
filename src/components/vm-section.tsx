import ieeeSbLogo from "@/assets/Ieee-SB-New-Colored.png";
import mission from "@/assets/mission.png";
import vision from "@/assets/vision.png";
import wieLogo from "@/assets/wie-colored.png";
import ImageSwitcher from "@/components/image-switcher";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const VisionMissionSection = () => {
  return (
    <div className="xl:px-40 px-3">
      <div className="grid justify-items-center lg:grid-cols-3 grid-cols-3 mb-10 mt-10">
        <Image
          src={ieeeSbLogo}
          className="w-96 sm:pt-8 lg:pt-12 sm:ms-8 pt-4"
          alt="SBLogo"
          width={2000}
          height={2000}
        />
        <Image
          src={wieLogo}
          className="w-12 sm:w-24 lg:w-40 lg:ms-6 ms-1 me-1"
          alt="WIELogo"
          width={2000}
          height={2000}
        />
        <ImageSwitcher />
      </div>
      <div className="grid justify-items-center xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4">
        <Card
          className="shadow-lg sm:w-96 mt-5 dark:bg-black bg-stone-100 border-none"
          id="card"
        >
          <CardHeader>
            <CardTitle className="text-lg font-bold flex" id="cardTitle">
              <Image
                src={mission}
                className="w-6 dark:invert m-1 pb-1"
                alt="missionLogo"
                width={1000}
                height={1000}
              />
              OUR <p className="text-cyan-600 ms-2">MISSION</p>
            </CardTitle>
            <CardDescription className="text-sm text-slate-700" id="cardDes">
              The Student Chapter of IEEE NSBM advises the community on ethics
              policy and concerns as well as fostering awareness on ethical
              issues and promoting ethical behavior amongst individuals and
              organizations working within the IEEE fields of interest.
            </CardDescription>
          </CardHeader>
        </Card>
        <div className="sm:hidden xl:hidden"></div>
        <Card
          className="shadow-lg sm:w-96 dark:bg-black border-none mt-5 bg-stone-100"
          id="card"
        >
          <CardHeader>
            <CardTitle className="text-lg flex" id="cardTitle">
              <Image
                src={vision}
                className="w-6 mb-1 dark:invert me-2 pb-1"
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
