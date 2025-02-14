import React from "react";

function PageIntro({
  title,
  subTitle,
  description,
  textColor,
  backgroundColor,
}: {
  title: string;
  subTitle: string;
  description: string;
  textColor: string;
  backgroundColor: string;
}) {
  return (
    <section className={"mb-10 " + backgroundColor}>
      <div className="container mx-auto max-w-[1170px] flex flex-col gap-4 my-12 justify-center items-center text-center px-10">
        <h1
          className={"text-4xl lg:text-6xl font-bold text-center " + textColor}
        >
          {title}
        </h1>
        <h2 className="text-2xl md:text-xl ">{subTitle}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default PageIntro;
