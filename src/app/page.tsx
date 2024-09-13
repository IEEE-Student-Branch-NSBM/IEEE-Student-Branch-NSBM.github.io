import React from "react";

import Contactus from "@/components/contactus";
import BranchCounsellors from "@/components/index/branch-counsellors";
import EventCard from "@/components/index/event-card";
import VisionMissionSection from "@/components/vm-section";

export default function Home() {
  return (
    <div>
      <VisionMissionSection />
      <BranchCounsellors />
      <EventCard />
    </div>
  );
}
