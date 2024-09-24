import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function joinUs() {
  return (
    <div className="mx-6 mt-12  ">
      {/* Section1*/}

      <div className="flex flex-col lg:flex-row items-center space-y-8">
        <div className="lg:w-1/3  ">
          <h1 className="md:text-[3.770rem] text-[2.570rem] font-bold  ">
            Our <span className="text-primaryLight">Vision</span>
          </h1>
          <p className="text-[1.223rem] text-opacity-85 mt-4 ">
            A world in which engineers and scientists are respected for their
            exemplary ethical behavior and the IEEE and its Ethics & Member
            Conduct Committee are recognized as a major drive in this regard.
          </p>
        </div>

        <div className="lg:w-2/3">
          <Image
            src="https://placehold.co/900x350.png"
            width={900}
            height={350}
            alt="Volenteer image"
          />
        </div>
      </div>

      {/* Section1*/}

      <div className="flex flex-col-reverse lg:flex-row items-center space-y-8 ">
        <div className="lg:w-2/3 mt-8">
          <Image
            src="https://placehold.co/900x350.png"
            width={900}
            height={350}
            alt="Volenteer image"
          />
        </div>

        <div className="lg:w-1/3  ">
          <h1 className="md:text-[3.770rem] text-[2.570rem] font-bold ">
            Our <span className="text-primaryLight">Mission</span>
          </h1>
          <p className="text-[1.223rem] text-opacity-85 mt-4 ">
            The Student Chapter of IEEE NSBM advises the community on ethics
            policy and concerns as well as fostering awareness on ethical issues
            and promoting ethical behavior amongst individuals and organizations
            working within the IEEE fields of interest.
          </p>
        </div>
      </div>

      {/* Section3*/}

      <div className="mt-10 flex  flex-col items-center  ">
        <h1 className="md:text-[3.270rem] text-[2.170rem] font-bold text-center ">
          How to get a IEEE Membership
        </h1>
        <p className=" w-auto lg:w-[1200px] mt-6 text-center">
          Reach your full potential as part of the world’s largest technology
          community. Membership in IEEE is open to individuals who by education
          or experience give evidence of competence in an IEEE-designated field.
          Refer to the informational video below to get an idea. In contrast
        </p>

        <a href="" className="text-primaryLight">
          click here to download the instructional PDF
        </a>
      </div>

      {/* Section4*/}

      <div className="mt-10 flex  flex-col items-center ">
        <h1 className="md:text-[3.270rem] text-[2.170rem] font-bold text-center ">
          How to Join a IEEE National Level Projects
        </h1>
        <p className=" w-auto lg:w-[1200px] mt-6 text-center">
          first you can get IEEE Membership and then you can join our national
          projects. There are 3 categories in our national level projects
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-6 ">
          <h1 className="w-[200px] px-4 py-2 bg-[#1f609b] text-white rounded  transition-colors duration-300">
            1. Member Activity
          </h1>
          <h1 className="w-[200px] px-4 py-2 bg-[#1f609b] text-white rounded  transition-colors duration-300">
            2. Technical Activity
          </h1>
          <h1 className="w-[200px] px-4 py-2 bg-[#1f609b] text-white rounded  transition-colors duration-300">
            3. Young Profesionals
          </h1>
        </div>

        <p className=" w-auto lg:w-[1200px] mt-6 text-center">
          Reach your full potential as part of the world’s largest technology
          community. Membership in IEEE is open to individuals who by education
          or experience give evidence of competence in an IEEE-designated field.
          Refer to the informational video below to get an idea. In contrast
        </p>
        <a href="" className="text-primaryLight">
          click here to download the instructional PDF
        </a>
      </div>
    </div>
  );
}
