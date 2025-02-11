import React from "react";
import MemberCard from "../excom/member-card";
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
    imageUrl: "https://placehold.co/200x200.png",
    title: "Chairperson - IEEE Student Branch",
    facebookURL: "#",
    linkdInURL: "#",
  },
  {
    name: "Dewmi Hathurusingha",
    imageUrl: "https://placehold.co/200x200.png",
    title: "Chairperson - IEEE Women In Engineering",
    facebookURL: "#",
    linkdInURL: "#",
  },
  {
    name: "Abhishek Bandaranaike",
    imageUrl: "https://placehold.co/200x200.png",
    title: "Chairperson - IEEE Computer Society",
    facebookURL: "#",
    linkdInURL: "#",
  },
];

const ExecutiveCommittee: React.FC = () => {
  return (
    <div className="container mt-10 mx-auto p-4 max-w-[1170px] flex flex-col items-center">
      <h1 className="text-4xl lg:text-6xl font-bold text-center">
        MEET THE EXECUTIVE COMMITTEE
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1170px] place-items-center mt-20">
        {members.map((member) => (
          <MemberCard key={member.name} {...member} />
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
