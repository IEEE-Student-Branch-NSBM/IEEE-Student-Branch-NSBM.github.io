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
  const excomCard = TwentyFourExcom.map(
    (member: {
      year: number;
      name: string;
      image: StaticImageData;
      title: string;
      linkdInURL: string;
      facebookURL: string;
    }) => (
      <div
        key={member.year}
        className="flex flex-col items-center w-[350px] h-[350px] shadow-lg rounded-2xl text-center mx-5 mt-10 hover:shadow-md transition-shadow duration-300"
      >
        <Image
          src={member.image}
          alt={member.name}
          className="w-full h-[250px] mb-4 rounded-t-2xl"
        />
        <h2 className="text-xl font-bold">{member.name}</h2>
        <p className="text-sm text-gray-600">{member.title}</p>
        <div className="flex p-2 justify-center text-[20px] gap-2">
          <Link href="#" className="footer-social">
            <BsFacebook />
          </Link>
          <Link href="#" className="footer-social">
            <BsLinkedin />
          </Link>
        </div>
      </div>
    ),
  );
  return (
    <div className="mx-auto mb-10">
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 container mx-auto max-w-[390px] md:max-w-[690px] lg:max-w-[850px] xl:max-w-[1100px] md:gap-5 pb-10">
        {excomCard}
      </div>
    </div>
  );
}
