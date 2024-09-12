import BranchCounsellors from "@/components/index/branch-counsellors";

import EventCard from "@/components/index/event-card";
import ExecutiveCommittee from "@/components/index/executive-committee";

export default function Home() {
  return (
    <div>
      <EventCard />
      <BranchCounsellors />
      <ExecutiveCommittee />
    </div>
  );
}
