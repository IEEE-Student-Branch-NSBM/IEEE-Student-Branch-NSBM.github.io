import Link from "next/link";
import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { Button } from "../ui/button";

interface Member {
  name: string;
  imageUrl: string;
  title: string;
  linkdInURL: string;
  facebookURL: string;
}

const members: Member[] = [
  {
    name: "Chathuranga Senarathne ",
    imageUrl: "https://via.placeholder.com/200",
    title: "Chairperson - IEEE Student Branch",
    facebookURL: "#",
    linkdInURL: "#",
  },
  {
    name: "Dewmi Hathurusingha",
    imageUrl: "https://via.placeholder.com/200",
    title: "Chairperson - IEEE Women In Engineering",
    facebookURL: "#",
    linkdInURL: "#",
  },
  {
    name: "Abhishek Bandaranaike",
    imageUrl: "https://via.placeholder.com/200",
    title: "Chairperson - IEEE Computer Society",
    facebookURL: "#",
    linkdInURL: "#",
  },
];

const ExecutiveCommittee: React.FC = () => {
  return (
    <div className="container mt-10 mx-auto p-4 max-w-[1170px]  flex flex-col items-center">
      <h1 className="text-4xl lg:text-6xl font-bold text-center">
        MEET THE EXECUTIVE COMMITTEE
      </h1>
      <div className="grid grid-cols-1 gap-12 place-items-center mt-20 md:grid-cols-2">
        {members.slice(0, 2).map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center w-[350px] h-[350px] shadow-lg rounded-2xl text-center lg:mt-0 mt-10 hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="rounded-full w-[200px] h-[200px] mt-4 mb-4"
            />
            <h2 className="text-xl font-bold">{member.name}</h2>
            <p className="text-sm text-gray-600">{member.title}</p>
            <div className="flex p-2 justify-center text-[20px] gap-2">
              <Link href="#" className="footer-social">
                <BsFacebook />
              </Link>
              <Link href={member.facebookURL} className="footer-social">
                <BsLinkedin />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-8 md:grid-cols-2 justify-center">
        {members.slice(2).map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center w-[350px] h-[350px] shadow-lg rounded-2xl text-center mt-10 hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="rounded-full w-[200px] h-[200px] mt-4 mb-4"
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
        ))}
      </div>
      <div className="my-10">
        <Button className="w-[200px] px-4 py-2 bg-[#1f609b] text-white rounded hover:bg-[#316ca3] transition-colors duration-300">
          VIEW ALL MEMBERS
        </Button>
      </div>
    </div>
  );
};

export default ExecutiveCommittee;
