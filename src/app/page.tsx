import React from "react";

import csexcom from "@/assets/hero-images/cs-excom.jpg";
import allexcom from "@/assets/hero-images/full-excom.jpg";
import sbexcom from "@/assets/hero-images/sb-excom.jpg";
import wieexcom from "@/assets/hero-images/wie-excom.jpg";
import BranchCounsellors from "@/components/index/branch-counsellors";
import EventCard from "@/components/index/event-card";
import ExecutiveCommittee from "@/components/index/executive-committee";
import Fellowship from "@/components/index/fellowship";
import HeroCarousel from "@/components/index/hero-section";
import ShapeFuture from "@/components/index/shape-future";
import VisionMissionSection from "@/components/index/vm-section";

export default function Home() {
  const cimages = [
    {
      image: allexcom,
      text: "Discover a community where ideas meet innovation, and creativity knows no limits Where technology.",
    },
    {
      image: sbexcom,
      text: "Empowering students to shape the future, one project at a time A place for curious minds and bold thinkers to connect and create.",
    },
    {
      image: csexcom,
      text: "Pushing boundaries, embracing challenges, and building a brighter future together. Innovation starts here, where students turn vision into reality.",
    },
    {
      image: wieexcom,
      text: "Explore, create, and lead with a community that shares your drive Where every challenge is an opportunity to grow and inspire.",
    },
  ];
  return (
    <div className="flex flex-col gap-20">
      <HeroCarousel
        cimages={cimages}
        gradient="from-primaryLight via-primaryLight"
        title="Welcome to IEEE Student Branch of NSBM"
      />

      <VisionMissionSection />
      <EventCard />
      <BranchCounsellors />
      <ExecutiveCommittee />
      <Fellowship />
      <ShapeFuture />
    </div>
  );
}
