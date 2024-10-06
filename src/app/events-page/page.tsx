import TwentyOneEvents from "@/components/events-page-tabs/2021-events";
import TwentyTwoEvents from "@/components/events-page-tabs/2022-events";
import TwentyThreeEvents from "@/components/events-page-tabs/2023-events";
import TwentyFourEvents from "@/components/events-page-tabs/2024-events";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function EventsPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider text-center mt-10 mb-5">
        EVENTS
      </h1>
      <Tabs
        defaultValue="2024"
        className="container mx-auto mt-3 max-w-[390px] md:max-w-[700px] lg:max-w-[990px] xl:max-w-[1200px]"
      >
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="2024">2024</TabsTrigger>
          <TabsTrigger value="2023">2023</TabsTrigger>
          <TabsTrigger value="2022">2022</TabsTrigger>
          <TabsTrigger value="2021">2021</TabsTrigger>
        </TabsList>
        <TabsContent value="2024">
          <TwentyFourEvents />
        </TabsContent>
        <TabsContent value="2023">
          <TwentyThreeEvents />
        </TabsContent>
        <TabsContent value="2022">
          <TwentyTwoEvents />
        </TabsContent>
        <TabsContent value="2021">
          <TwentyOneEvents />
        </TabsContent>
      </Tabs>
    </div>
  );
}
