import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";

interface MemberCardProps {
  name: string;
  imageUrl: string;
  title: string;
  facebookURL: string;
  linkdInURL: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  imageUrl,
  title,
  facebookURL,
  linkdInURL,
}) => {
  return (
    <div className="flex flex-col m-auto items-center w-[350px] h-[350px] shadow-lg rounded-2xl text-center hover:shadow-md transition-shadow duration-300">
      <div className="relative w-[200px] h-[200px] mt-4 mb-4">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm text-gray-600">{title}</p>
      <div className="flex p-2 justify-center text-[20px] gap-4">
        <Link
          href={facebookURL}
          className="footer-social hover:text-blue transition-colors duration-300"
        >
          <BsFacebook />
        </Link>
        <Link
          href={linkdInURL}
          className="footer-social hover:text-blue transition-colors duration-300"
        >
          <BsLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default MemberCard;
