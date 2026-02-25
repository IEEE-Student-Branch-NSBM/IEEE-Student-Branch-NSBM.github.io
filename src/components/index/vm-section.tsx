import SightLogoImage from "@/assets/Sight logo.png";
import IeeeCsColorBlackImage from "@/assets/ieee-cs-colored-black.png";
import IeeeSbLogoImage from "@/assets/logo new.png";
import WieLogoImage from "@/assets/wie-logo-bar-colored.png";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { FaEye } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

const VisionMissionSection = () => {
  return (
    <div className="container mx-auto max-w-[1170px] flex flex-col justify-center items-center px-5 xl:px-0">
      <div className="sm:max-w-[1170px] flex flex-col sm:flex-row justify-center gap-16 ">
        <Card className="shadow-lg flex-1 ">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 font-bold text-2xl">
              <TbTargetArrow size={35} />

              <div>
                OUR <span className="text-cyan-600">MISSION</span>
              </div>
            </CardTitle>

            <CardDescription className="text-lg text-slate-700">
              The IEEE Student Branch of NSBM advises the community on ethics
              policy and concerns as well as fostering awareness on ethical
              issues and promoting ethical behaviour amongst individuals and
              organisations working within the IEEE fields of interest.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="shadow-lg flex-1 ">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl font-bold">
              <FaEye size={35} />

              <div>
                OUR <span className="text-cyan-600">VISION</span>
              </div>
            </CardTitle>

            <CardDescription className="text-lg text-slate-700">
              A world in which engineers and scientists are respected for their
              exemplary ethical behaviour and the IEEE and its Ethics & Member
              Conduct Committee are recognized as a major drive in this regard.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="sm:max-w-[1170px] flex flex-col px-2 pt-20 sm:flex-row justify-center items-center gap-16">
        <div className="flex-1 scale-110">
          <Image src={IeeeSbLogoImage} alt="SBLogo" />
        </div>
        <div className="flex-1 scale-90 ml-0 md:ml-1">
          <Image src={IeeeCsColorBlackImage} alt="IEEE CS Logo" />
        </div>
        <div className="flex-1 scale-110">
          <Image src={WieLogoImage} alt="WIELogo" />
        </div>
        <div className="flex-1 scale-75 ml-0 md:ml-1">
          <Image src={SightLogoImage} alt="IEEE SIGHT Logo" />
        </div>
      </div>
    </div>
  );
};
export default VisionMissionSection;
