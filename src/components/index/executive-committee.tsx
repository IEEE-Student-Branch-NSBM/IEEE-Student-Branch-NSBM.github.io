"use client";
import { members } from "@/content/excom-member-data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { Button } from "../ui/button";
import { Card, CardDescription, CardTitle } from "../ui/card";

const ExecutiveCommittee = () => {
  const router = useRouter();
  const filteredExcom = members.filter(
    (member) => member.role === "chairperson",
  );
  const handleReadMore = () => {
    router.push("/excom");
  };

  return (
    <div className="container mx-auto max-w-[1170px] space-y-5 px-5 xl:px-0">
      <h3 className="text-3xl font-bold text-center uppercase">
        Meet the Executive Committee
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredExcom.map((member, index) => (
          <Card
            key={index}
            className="flex flex-col items-center overflow-hidden"
          >
            <div className="aspect-square w-full relative shadow-inner z-10">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover absolute inset-0 bg-gradient-to-b from-blue/50 to-blue/90"
              />
            </div>

            <div className="text-center my-5 space-y-1">
              <CardTitle className="text-xl font-semibold">
                {member.name}
              </CardTitle>
              <CardDescription>{member.title}</CardDescription>
              <div className="flex justify-center space-x-3">
                <Link href={member.facebookURL}>
                  <BsFacebook className="text-xl text-blue" />
                </Link>
                <Link href={member.linkdInURL}>
                  <BsLinkedin className="text-xl text-blue" />
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          onClick={handleReadMore}
          className="w-[200px] px-4 py-2 bg-blue text-white rounded hover:bg-[#316ca3] transition-colors duration-300"
        >
          VIEW ALL MEMBERS
        </Button>
      </div>
    </div>
  );
};

export default ExecutiveCommittee;
