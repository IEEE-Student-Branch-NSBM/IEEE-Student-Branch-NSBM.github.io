import JoinUs from "@/assets/join-us.png";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function fellowship() {
  return (
    <div className="bg-secondaryLight pt-[4rem] pb-[4rem] flex flex-row justify-center ">
      <div className="space-y-20 max-w-[1170px] px-4 ">
        <div className="flex flex-col items-center gap-4">
          <h1 className="uppercase font-bold md:text-[4rem] text-[2.212rem] text-opacity-85 ">
            Our fellowship
          </h1>

          <div className="relative ">
            <iframe
              src="https://www.youtube.com/embed/ihz8vom1XPg?si=6paJ6wkTi9SFNLgQ&controls=0&rel=0"
              className="lg:w-[750px] lg:h-[420px] w-[420px] h-[240px] "
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col justify-center gap-10  ">
          <Image width={600} height={123} src={JoinUs} alt="ieee-footer-logo" />

          <div className="space-y-2 max-w-[520px]   ">
            <h2 className="font-bold md:text-[2.653rem] text-[2.253rem] text-opacity-85  ">
              Be part of our creative community
            </h2>

            <p className="font-medium md:text-[1.232rem] text-[1.132rem] text-opacity-85 ">
              We love what we do and we do it with passion. We value the
              experimentation of the message and smart incentives.
            </p>

            <Button className=" mx-4 mt-4 px-12 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors  ">
              Join us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default fellowship;
