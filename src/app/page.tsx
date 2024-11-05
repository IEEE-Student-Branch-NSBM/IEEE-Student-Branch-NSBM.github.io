import React from "react";

import BranchCounsellors from "@/components/index/branch-counsellors";
import EventCard from "@/components/index/event-card";
import ExecutiveCommittee from "@/components/index/executive-committee";
import Fellowship from "@/components/index/fellowship";
import HeroCarousel from "@/components/index/hero-section";
import VisionMissionSection from "@/components/index/vm-section";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <VisionMissionSection />
      <BranchCounsellors />
      <EventCard />
      <ExecutiveCommittee />
      <Fellowship />
    </div>
  );
}
