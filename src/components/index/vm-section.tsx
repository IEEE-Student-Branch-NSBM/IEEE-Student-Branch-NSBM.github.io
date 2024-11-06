import IeeeCsColorBlackImage from "@/assets/ieee-cs-colored-black.png";
import IeeeSbLogoImage from "@/assets/ieee-sb-new-colored.png";
import WieLogoImage from "@/assets/wie-colored.png";
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
    <div className="container mx-auto max-w-[1170px] flex flex-col mt-10 justify-center items-center">
      <div className="max-w-[300px] sm:max-w-[900px] flex flex-col p-5 sm:flex-row justify-center gap-5 ">
        <Card className="shadow-lg flex-1 bg-stone-100 border-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-lg font-bold">
              <TbTargetArrow size={35} />

              <div>
                OUR <span className="text-cyan-600">MISSION</span>
              </div>
            </CardTitle>

            <CardDescription className="text-sm text-slate-700">
              The IEEE Student Branch of NSBM advises the community on ethics
              policy and concerns as well as fostering awareness on ethical
              issues and promoting ethical behaviour amongst individuals and
              organisations working within the IEEE fields of interest.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="shadow-lg flex-1 bg-stone-100 border-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-lg font-bold">
              <FaEye size={35} />

              <div>
                OUR <span className="text-cyan-600">VISION</span>
              </div>
            </CardTitle>

            <CardDescription className="text-sm text-slate-700">
              A world in which engineers and scientists are respected for their
              exemplary ethical behaviour and the IEEE and its Ethics & Member
              Conduct Committee are recognized as a major drive in this regard.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="max-w-[300px] sm:max-w-[900px] flex flex-col p-5 sm:flex-row justify-center items-center gap-5">
        <div className="flex-1 scale-110">
          <Image src={IeeeSbLogoImage} alt="SBLogo" />
        </div>

        <div className="flex-1 scale-50">
          <Image src={WieLogoImage} alt="WIELogo" />
        </div>

        <div className="flex-1 w-4/5 sm:w-1/3">
          <Image src={IeeeCsColorBlackImage} alt="IEEE CS Logo" />
        </div>
      </div>
    </div>
  );
};
export default VisionMissionSection;
