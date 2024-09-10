import ImageSwitcher from "@/components/ImageSwitcher";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const VisionMissionSection =()=> {
  return (
    <div className="xl:px-40 px-3">
      <div className="grid justify-items-center lg:grid-cols-3 grid-cols-3 mb-10 mt-10">
        <img
          src="Images\NewLogo Colored 1.svg"
          className="w-96 sm:pt-8 lg:pt-12 sm:ms-8 pt-4"
          alt="SBLogo"
        />
        <img
          src="Images\WIE LOGO REBUILD - Color 1.svg"
          className="w-12 sm:w-24 lg:w-40 lg:ms-6 ms-1 me-1"
          alt="WIELogo"
        />
        <ImageSwitcher />
      </div>
      <div className="grid justify-items-center xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4">
        <Card className="shadow-lg sm:w-96 mt-5 bg-stone-100 border-none" id="card">
          <CardHeader>
            <CardTitle className="text-lg font-bold flex" id="cardTitle">
              <img
                src="Images\Mission.svg"
                className="w-6 pe-1 pb-0.5"
                alt="missionLogo"
                id="cardImg"
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
        <Card className="shadow-lg sm:w-96 border-none mt-5 bg-stone-100" id="card">
          <CardHeader>
            <CardTitle className="text-lg flex" id="cardTitle">
              <img
                src="Images\Vision.svg"
                className="w-6 pe-1 pb-0.5"
                alt="visionLogo"
                id="cardImg"
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
}
export default VisionMissionSection

