"use client";
import duothanImg from "@/assets/hero-images/duothan4.0.jpg";
import EventCard from "@/components/index/event-card";
import HeroCarousel from "@/components/index/hero-section";
import ShapeFuture from "@/components/index/shape-future";
import ExcomSection from "@/components/wie-cs/ex-com-section";
import PageIntro from "@/components/wie-cs/page-intro";
import PastExcomSection from "@/components/wie-cs/past-excom-section";
import React from "react";

import DVC from "@/assets/bc-and-excom/dvc.png";

function page() {
  const carrouselImages = [
    {
      image: duothanImg,
      text: "Test",
    },
  ];

  return (
    <>
      <HeroCarousel cimages={carrouselImages} gradient="from-csLight" />
      <PageIntro
        title="Computer Society"
        textColor="text-csLight"
        subTitle="IEEE COMPUTER SOCIETY STUDENT BRANCH CHAPTER OF NSBM"
        backgroundColor="bg-[#fff4e1]"
        description="IEEE Computer Society is a professional society of the Institute of Electrical and Electronics Engineers (IEEE). It sponsors workshops and conferences, operates technical committees, and develops IEEE computing standards. The community supports more than 200 chapters worldwide and participates in educational activities at all levels in CS and professional certification in software engineering. IEEE Computer Society of NSBM is the student chapter of the NSBM Green University, and its purpose is to increase the knowledge in computer literacy & IT, as well as the professional standing of its members."
      />
      <EventCard category="cs" />
      <PastExcomSection
        title="Executive Committee 2025/26"
        year={2025}
        category="cs"
        description="The Executive Committee of IEEE Computer Society will deliver organizational guidance to the community. Join the IEEE Computer Society, a leading organization for anyone engaged in computers and information technology to expand their knowledge."
      />
      <ExcomSection title="Past Executive Committee" imgUrl={DVC} />
      <ShapeFuture />
    </>
  );
}

export default page;
