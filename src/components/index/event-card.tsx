import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { Button } from "../ui/button";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "අයුබෝවන් IEEE 2022",
    date: "30th July, 2022",
    description:
      "The 'AYUBOWAN IEEE 2022' is a session that raises awareness among the university students on Introduction to IEEE Student Branch of NSBM, Advantages of IEEE Membership, and How to Become an IEEE Recognized individual.",
    imageUrl: "https://placehold.co/300x150",
  },
  {
    id: 2,
    title: "MAD FEST",
    date: "25th May, 2022",
    description:
      "MAD-Fest is a platform which opens for passionate Mobile Application Developers.",
    imageUrl: "https://placehold.co/300x150",
  },
  {
    id: 3,
    title: "INTERNATIONAL ARDUINO DAY CELEBRATION 2022 AT NSBM",
    date: "23rd March, 2022",
    description:
      "Arduino Day is a celebration of the Arduino Community and its achievements.",
    imageUrl: "https://placehold.co/300x150",
  },
  {
    id: 4,
    title: "DUOTHAN 2.0",
    date: "23rd February, 2022",
    description:
      "Duothan 2.0 is a hackathon that is organized by the IEEE Student Branch of NSBM which is competed by groups of two. This hackathon is organized with the explicit purpose of enhancing the coding skills of undergraduates.",
    imageUrl: "https://placehold.co/300x150",
  },
  {
    id: 5,
    title: "ROAD TO FULL STACK - MOBILE",
    date: "8th December, 2021",
    description:
      "Road To Full Stack - Mobile organized by IEEE Student Branch Affinity Group of NSBM is a great opportunity for you to begin the strategy of Mobile Application Development.",
    imageUrl: "https://placehold.co/300x150",
  },
];

const eventcard: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">LATEST EVENTS</h1>
      <Carousel className="w-full">
        <CarouselContent>
          {events.map((event) => (
            <CarouselItem key={event.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="h-[30rem]">
                  <CardContent className="flex flex-col px-0 h-full justify-between">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full  mb-4 rounded  "
                    />
                    <h2 className="text-xl font-semibold mb-2 px-4">
                      {event.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-2 px-4 text-left">
                      {event.date}
                    </p>
                    <p className="text-sm px-4">{event.description}</p>
                    <Button className=" mx-4 mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors  ">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default eventcard;
