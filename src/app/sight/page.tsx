"use client";
import sightexcom from "@/assets/hero-images/sight-excom.jpg";
// import EventCard from "@/components/index/event-card";
import HeroCarousel from "@/components/index/hero-section";
import ShapeFuture from "@/components/index/shape-future";
import ExcomSection from "@/components/wie-cs/excom-section";
import PageIntro from "@/components/wie-cs/page-intro";
// import PastExcomSection from "@/components/wie-cs/past-excom-section";
import React from "react";

// import DVC from "@/assets/bc-and-excom/dvc.png";

function page() {
  const carrouselImages = [
    {
      image: sightexcom,
      text: "Test",
    },
  ];

  return (
    <>
      <HeroCarousel
        cimages={carrouselImages}
        title="Welcome to IEEE Sight Affinity Group of NSBM"
        gradient="from-sightLight via-sightLight"
      />
      <div className="flex flex-col gap-20">
        <PageIntro
          title="Special Interest Group on Humanitarian Technology"
          subTitle="IEEE SIGHT AFFINITY GROUP OF NSBM"
          textColor="text-sightLight"
          backgroundColor="bg-[#fcf4ff]"
          description="IEEE SIGHT (Special Interest Group on Humanitarian Technology) of NSBM is dedicated to addressing humanitarian challenges through technology and engineering solutions."
        />
        <ExcomSection
          title="Executive Committee 2025/26"
          year={2025}
          category="sight"
          description=""
        />
        {/* <PastExcomSection title="Past Executive Committee" imgUrl={DVC} /> */}
        <ShapeFuture />
      </div>
    </>
  );
}

export default page;
