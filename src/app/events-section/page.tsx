import TwentyOneEvents from "@/components/events-page-tabs/2021-events";
import TwentyTwoEvents from "@/components/events-page-tabs/2022-events";
import TwentyThreeEvents from "@/components/events-page-tabs/2023-events";
import TwentyFourEvents from "@/components/events-page-tabs/2024-events";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function events() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl md:text-6xl lg:text-8xl tracking-wider text-center pt-10 pb-6 font-semibold ">
        EVENTS
      </h1>
      <div>
        <Tabs
          defaultValue="2024Events"
          className="container mx-auto max-w-[400px] md:max-w-[700px] lg:max-w-[870px] xl:max-w-[1200px]"
        >
          <TabsList className="grid w-full mb-5 grid-cols-4 bg-slate-300 text-lg">
            <TabsTrigger value="2024Events">2024</TabsTrigger>
            <TabsTrigger value="2023Events">2023</TabsTrigger>
            <TabsTrigger value="2022Events">2022</TabsTrigger>
            <TabsTrigger value="2021Events">2021</TabsTrigger>
          </TabsList>
          <TabsContent value="2024Events">
            <TwentyFourEvents />
          </TabsContent>
          <TabsContent value="2023Events">
            <TwentyThreeEvents />
          </TabsContent>
          <TabsContent value="2022Events">
            <TwentyTwoEvents />
          </TabsContent>
          <TabsContent value="2021Events">
            <TwentyOneEvents />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
