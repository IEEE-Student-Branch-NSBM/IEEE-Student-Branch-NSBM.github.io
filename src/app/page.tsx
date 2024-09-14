import React from "react";

import BranchCounsellors from "@/components/index/branch-counsellors";
import EventCard from "@/components/index/event-card";
import ExecutiveCommittee from "@/components/index/executive-committee";
import Fellowship from "@/components/shared/fellowship";
import VisionMissionSection from "@/components/vm-section";
export default function Home() {
  return (
    <div>
      <VisionMissionSection />
      <BranchCounsellors />
      <EventCard />
      <ExecutiveCommittee />
      <Fellowship />
    </div>
  );
}
