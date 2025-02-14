"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { events } from "@/content/event-data";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const EventCard = ({ category }: { category?: string }) => {
  const router = useRouter();
  const filteredEvents = category
    ? events.filter((event) => event.category === category)
    : events;

  const handleReadMore = (link: string) => {
    router.push("/events-page/" + link);
  };
  return (
    <div className="w-full max-w-[1170px] mx-auto space-y-5 px-5 xl:px-0">
      <h3 className="text-3xl font-bold text-center">LATEST EVENTS</h3>

      <Carousel className="w-full">
        <CarouselContent>
          {filteredEvents.map((event, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 sm:basis-1/2 lg:basis-1/3"
            >
              <Card className="h-[30rem] shadow-lg rounded-lg overflow-hidden">
                <CardContent className="flex flex-col p-0 gap-5 h-full relative">
                  <div className="w-full h-full space-y-4">
                    <div className="aspect-video relative w-full">
                      <Image
                        src={event.image}
                        alt={event.title}
                        layout="fill"
                      />
                    </div>

                    <div className="px-4 flex flex-col gap-1">
                      <h2 className="text-xl font-semibold ">{event.title}</h2>
                      <p className="text-sm text-gray-500 text-left">
                        {event.year}
                      </p>

                      <p className="text-sm text-left line-clamp-4 md:line-clamp-5 lg:line-clamp-6 overflow-hidden">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleReadMore(event.link)}
                    className="font-bold min-w-[130px] bg-primaryLight text-white rounded hover:bg-blue-700 transition-colors mx-4 mb-4"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="hidden xl:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default EventCard;
