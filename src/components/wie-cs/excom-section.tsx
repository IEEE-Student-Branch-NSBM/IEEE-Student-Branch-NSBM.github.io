"use client";
import { members } from "@/content/excom-member-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";

function ExcomSection({
  title,
  year,
  category,
  description,
}: {
  title: string;
  year: number;
  category: string;
  description: string;
}) {
  const filteredMembers = members.filter(
    (member) => member.category === category && member.year === year,
  );
  const getBackgroundColor = (category: string) => {
    switch (category) {
      case "sb":
        return "from-blue/50 to-blue/90";
      case "cs":
        return "from-csLight/50 to-csLight/90";
      case "wie":
        return "from-wieLight/50 to-wieLight/90";
      case "sight":
        return "from-sightLight/50 to-sightLight/90";
      default:
        return "from-gray-400/50 to-gray-400/90";
    }
  };
  return (
    <div className="container mx-auto max-w-[1170px] px-4  flex flex-col gap-4">
      <h1 className="text-4xl lg:text-6xl font-bold text-center">{title}</h1>
      <p className="text-center">{description}</p>
      <div className="flex flex-wrap justify-center gap-4">
        {filteredMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center mx-5 md:m w-[300px] h-[350px] shadow-lg rounded-2xl text-center mt-10 hover:shadow-md transition-shadow duration-300"
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
        ))}
      </div>
    </div>
  );
}

export default ExcomSection;
