import { members } from "@/content/excom-member-data";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";

interface Props {
  category: string;
}

export default function TwentyFourExcom({ category }: Props) {
  const TwentyFourExcom = members.filter(
    (member) => member.year === 2024 && member.category === category,
  );
  const getBackgroundColor = (category: string) => {
    switch (category) {
      case "sb":
        return "from-blue/50 to-blue/90";
      case "cs":
        return "from-csLight/50 to-csLight/90";
      case "wie":
        return "from-wieLight/50 to-wieLight/90";
      default:
        return "from-gray-400/50 to-gray-400/90";
    }
  };
  const excomCard = TwentyFourExcom.map(
    (member: {
      year: number;
      name: string;
      image: StaticImageData;
      category: string;
      title: string;
      linkdInURL: string;
      facebookURL: string;
    }) => (
      <div
        key={member.year}
        className="flex flex-col items-center w-[300px] h-[350px] shadow-lg rounded-2xl text-center mx-5 mt-10 hover:shadow-md transition-shadow duration-300"
      >
        <Image
          src={member.image}
          alt={member.name}
          className={`bg-gradient-to-b ${getBackgroundColor(member.category)} w-full h-[250px] mb-4 rounded-t-2xl`}
        />
        <h2 className="text-xl font-bold">{member.name}</h2>
        <p className="text-sm text-gray-600">{member.title}</p>
        <div className="flex p-2 justify-center text-[20px] text-blue gap-2">
          <Link href={member.facebookURL} className="footer-social">
            <BsFacebook />
          </Link>
          <Link href={member.linkdInURL} className="footer-social">
            <BsLinkedin />
          </Link>
        </div>
      </div>
    ),
  );
  return (
    <div className="mx-auto mb-10">
      <div className="flex flex-wrap flex-cols-1 justify-center md:grid-cols-2 container mx-auto max-w-[390px] md:max-w-[690px] lg:max-w-[850px] xl:max-w-[1100px] md:gap-5 pb-10">
        {excomCard}
      </div>
    </div>
  );
}
