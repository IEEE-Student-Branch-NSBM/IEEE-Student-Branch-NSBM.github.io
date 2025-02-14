import Image, { StaticImageData } from "next/image";
import React from "react";

function ExcomSection({
  title,

  imgUrl,
}: {
  title: string;
  imgUrl: StaticImageData;
}) {
  return (
    <div className="container mx-auto max-w-[1170px] flex flex-col gap-4 my-12 justify-center items-center text-center  p-10">
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      <div className="max-w-[760px] w-full  md:px-10">
        <Image
          src={imgUrl}
          width={869}
          height={1000}
          className="w-full"
          alt="excom members"
        />
      </div>
    </div>
  );
}

export default ExcomSection;
