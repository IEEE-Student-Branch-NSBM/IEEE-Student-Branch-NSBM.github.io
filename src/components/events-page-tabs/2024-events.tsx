import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { events } from "../../content/event-data";
import { Button } from "../ui/button";

export default function TwentyFourEvents() {
  const TwentyFourEvents = events.filter(
    (event: { year: number }) => event.year === 2024,
  );

  const eventsCard = TwentyFourEvents.map(
    (event: {
      year: number;
      title: string;
      description: string;
      image: StaticImageData;
      link: string;
    }) => (
      <Card key={event.year} className="bg-slate-300 rounded-xl ">
        <CardHeader>
          <Image
            src={event.image}
            alt={event.title}
            width={1600}
            height={900}
            className="mx-auto mb-5 aspect-video"
          />
          <CardTitle>{event.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm lg:text-base text-justify">
            {event.description}
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild className="bg-blue-950 text-white border-none">
            <Link href={event.link}>View More</Link>
          </Button>
        </CardFooter>
      </Card>
    ),
  );
  return (
    <div className="mx-auto mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto max-w-[390px] md:max-w-[690px] lg:max-w-[850px] xl:max-w-[1100px] gap-5">
        {eventsCard}
      </div>
    </div>
  );
}
